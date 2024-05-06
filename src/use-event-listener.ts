import { useEffect } from "react";

// #region function overloads

/**
 * A React hook to attach an event listener to a DOM node. This is most useful
 * for very simple one-off event listeners attached without conditions. The
 * listener is attached in `useEffect` and torn down in its cleanup phase.
 *
 * If you need to attach multiple related events, it's generally better to set
 * those up in `useEffect` directly to reduce overhead and simplify.
 *
 * @param element The node reference to which the event listener will be
 * attached. This may take a few different shapes:
 * - If you want to attach the event listener to the global `window` or
 *   `document` objects, this can be a string of `"window"` or `"document"`
 *   respectively. This is useful to avoid null-checking in your component so
 *   that this is safe for SSR.
 * - A React ref object that contains the node. **You should always pass the ref
 *   itself rather than its current value.** The ref may not be attached when
 *   the effect runs, and since refs aren't stateful its value change won't
 *   re-trigger the effect, which means event listeners may never be attached.
 * - A direct reference to a DOM node. This is useful if the node is stateful,
 *   in which case the listener will be detached and re-attached to synchronize
 *   with React state.
 *
 * @param type The name of the event to listen for.
 *
 * @param listener The event listener callback that fires in response to the
 * event being dispatched.
 *
 * **This should always be stabilized between renders.** If the listener
 * reference can be saved without memoization (meaning that its dependencies
 * changing do not need to detach or re-attach the event listener), wrap the
 * listener in `useEffectEvent` to prevent attaching/detaching on every render.
 *
 * @param options An options object that specifies characteristics about the
 * event listener
 */
export function useEventListener<K extends keyof WindowEventMap>(
	element: "window" | Window | Nullish,
	type: K,
	listener: ((evt: WindowEventMap[K]) => any) | Nullish,
	options?: UseEventListenerOptions,
): void;

export function useEventListener<K extends keyof DocumentEventMap>(
	element: "document" | Document | Nullish,
	type: K,
	listener: ((evt: DocumentEventMap[K]) => any) | Nullish,
	options?: UseEventListenerOptions,
): void;

export function useEventListener<
	T extends HTMLElement,
	K extends keyof HTMLElementEventMap,
>(
	element: T | RefObject<T> | Nullish,
	type: K,
	listener: ((evt: SpecificEvent<HTMLElementEventMap[K], T>) => any) | Nullish,
	options?: UseEventListenerOptions,
): void;

export function useEventListener<K extends keyof HTMLElementEventMap>(
	element: HTMLElement | RefObject<HTMLElement> | Nullish,
	type: K,
	listener: ((evt: HTMLElementEventMap[K]) => any) | Nullish,
	options?: UseEventListenerOptions,
): void;

export function useEventListener<
	T extends SVGElement,
	K extends keyof SVGElementEventMap,
>(
	element: T | RefObject<T> | Nullish,
	type: K,
	listener: ((evt: SpecificEvent<SVGElementEventMap[K], T>) => any) | Nullish,
	options?: UseEventListenerOptions,
): void;

export function useEventListener<K extends keyof SVGElementEventMap>(
	element: SVGElement | RefObject<SVGElement> | Nullish,
	type: K,
	listener: ((evt: SVGElementEventMap[K]) => any) | Nullish,
	options?: UseEventListenerOptions,
): void;

export function useEventListener<
	T extends Element,
	K extends keyof ElementEventMap,
>(
	element: T | RefObject<T> | Nullish,
	type: K,
	listener: ((evt: SpecificEvent<ElementEventMap[K], T>) => any) | Nullish,
	options?: UseEventListenerOptions,
): void;

export function useEventListener<K extends keyof ElementEventMap>(
	element: Element | RefObject<Element> | Nullish,
	type: K,
	listener: ((evt: ElementEventMap[K]) => any) | Nullish,
	options?: UseEventListenerOptions,
): void;

// #endregion

export function useEventListener(
	elementOrRef: any,
	type: string,
	listener: ((event: Event) => any) | Nullish,
	options?: UseEventListenerOptions,
): void {
	let {
		capture,
		once,
		// default for `passive` is inconsistent between browsers
		// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#specifications
		passive = false,
		signal,
		skip = false,
	} = options ?? {};

	useEffect(() => {
		if (!elementOrRef || !listener || skip) {
			return;
		}

		let element: any;
		if (typeof elementOrRef === "string") {
			if (elementOrRef === "window") {
				element = window;
			} else if (elementOrRef === "document") {
				element = document;
			} else {
				throw new Error(
					`Invalid element reference: "${elementOrRef}". ` +
						`Expected "window" or "document".`,
				);
			}
		} else if (isReactRef(elementOrRef)) {
			element = elementOrRef.current;
		} else {
			element = elementOrRef;
		}

		if (!element?.addEventListener) {
			return;
		}

		let options = { capture, once, passive, signal };
		element.addEventListener(type, listener, options);
		return () => {
			element.removeEventListener(type, listener, options);
		};
	}, [listener, capture, elementOrRef, once, passive, signal, skip, type]);
}

function isReactRef(value: unknown): value is React.RefObject<unknown> {
	const isRefMaybe =
		typeof value === "object" &&
		value !== null &&
		"current" in value &&
		value.current !== null;
	if (!isRefMaybe) {
		return false;
	}
	// it's technically possible that a `current` value is present. ie. it's
	// assigned to `window` for some reason, or we're dealing with a Proxy or some
	// other weird shit. In this context let's just make sure this is not a DOM
	// node. Do not use an `instanceof` check here because it may fail for
	// cross-origin iframes.
	return !(
		"document" in value ||
		"createElement" in value ||
		"tagName" in value
	);
}

/**
 * An object that specifies characteristics about an event listener.
 *
 * @see [MDN: `addEventListener` options](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#options).
 */
export interface UseEventListenerOptions {
	/**
	 * A boolean value indicating that events of this type will be dispatched to
	 * the registered `listener` before being dispatched to any `EventTarget`
	 * beneath it in the DOM tree. If not specified, defaults to `false`.
	 */
	capture?: boolean;
	/**
	 * A boolean value indicating that the `listener` should be invoked at most
	 * once after being added. If `true`, the `listener` would be automatically
	 * removed when invoked. If not specified, defaults to `false`.
	 */
	once?: boolean;
	/**
	 * A boolean value that, if `true`, indicates that the function specified by
	 * `listener` will never call `preventDefault()`. If a passive listener does
	 * call `preventDefault()`, the user agent will do nothing other than generate
	 * a console warning. If not specified, defaults to `false`.
	 */
	passive?: boolean;
	/**
	 * An `AbortSignal`. The `listener` will be removed when the given
	 * `AbortSignal` object's `abort()` method is called. If not specified, no
	 * `AbortSignal` is associated with the `listener`.
	 */
	signal?: AbortSignal;
	/**
	 * A boolean value indicating whether or not the event listener should not be
	 * attached under certain conditions.
	 */
	skip?: boolean;
}

type Nullish = null | undefined;

type RefObject<T> =
	| React.RefObject<T | undefined>
	| React.MutableRefObject<T | null | undefined>;

type SpecificEvent<BaseEvent extends Event, Target> = Omit<
	BaseEvent,
	"currentTarget"
> & {
	currentTarget: Target;
};
