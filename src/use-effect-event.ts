import { useCallback, useInsertionEffect, useRef } from "react";

/**
 * Creates a stable callback function that has access to the latest state and
 * can be used within event handlers and effect callbacks. Throws when used in
 * the render phase. This is effectively a "polyfill" for the unreleased
 * `useEffectEvent`, currently only available in canary and experimental builds
 * of React.
 *
 * @see https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event
 */
export function useEffectEvent<T extends (...args: any[]) => any>(
	callback?: T,
) {
	const ref = useRef<AnyFunction | undefined>((): any => {
		throw new Error("Cannot call an event handler while rendering.");
	});
	// According to the React docs, `useInsertionEffect` callbacks will fire
	// before `useEffect` and `useLayoutEffect` callbacks. Since
	// `useInsertionEffect` isn't something we'll use outside of *potentially*
	// CSS-in-JS stylesheets (ew), it works well in this context to ensure that
	// callbacks fired in layout effects are syncronized on time.
	useInsertionEffect(() => {
		ref.current = callback;
	});
	return useCallback<AnyFunction>((...args) => ref.current?.(...args), []) as T;
}

type AnyFunction = (...args: any[]) => any;
