import { useCallback } from "react";

/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs The refs to assign. These may be objects created with `useRef` or
 * `createRef`, or ref callback functions. It is important that callback refs
 * are memoized, just as they would be when assinging a ref to an element
 * directly.
 * @returns A callback ref that will assign (or call with, in the case of
 * functions) the same value to all provided refs.
 */
export function useComposedRefs<RefValueType = unknown>(
	...refs: (AssignableRef<RefValueType> | null | undefined)[]
) {
	return useCallback((node: RefValueType) => {
		for (const ref of refs) {
			assignRef(ref, node);
		}
		// IMPORTANT: We always expect refs to persist between renders so we can
		// ignore the lint rule in this case. Never ever pass anything other than an
		// actual React ref as an argument to useComposedRefs
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, refs);
}

type AssignableRef<ValueType> =
	| {
			bivarianceHack(instance: ValueType | null): void;
	  }["bivarianceHack"]
	| React.MutableRefObject<ValueType | null>;

/**
 * Passes or assigns an arbitrary value to a ref function or object.
 */
function assignRef<RefValueType = unknown>(
	ref: React.Ref<RefValueType> | null | undefined,
	value: RefValueType,
) {
	if (ref == null) return;
	if (typeof ref === "function") {
		ref(value);
	} else {
		try {
			(ref as React.MutableRefObject<RefValueType>).current = value;
		} catch {
			console.warn(
				`Cannot assign value "${value}" to ref "${ref}". This is likely a bug. Make sure refs are passed as stable callback functions or mutable ref objects. String refs are not supported.`,
			);
		}
	}
}
