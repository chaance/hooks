import * as React from "react";
import { useLayoutEffect } from "./use-isomorphic-layout-effect";

function createUseEventListener(useEffect: typeof React.useEffect) {
	/**
	 * A React hook that attaches an event listener to the global window. The
	 * listener is attached in an effect hook and torn down in its cleanup phase.
	 *
	 * @param type A case-sensitive string representing the [event
	 * type](https://developer.mozilla.org/en-US/docs/Web/Events) to listen for
	 * @param listener The event listener callback that fires in response to the
	 *                 event being dispatched
	 * @param options An options object that specifies characteristics about the
	 *                event listener
	 */
	function useEventListener<ListenerType extends keyof EventMap>(
		type: ListenerType,
		listener: (event: EventMap[ListenerType]) => void,
		options?: UseEventListenerOptions
	): void;

	/**
	 * A React hook that attaches an event listener to an element stored in a ref.
	 * The listener is attached in an effect hook and torn down in its cleanup
	 * phase.
	 *
	 * @param elementRef A React ref object containing the element to which the
	 *                   event listener will be attached
	 * @param type A case-sensitive string representing the [event
	 * type](https://developer.mozilla.org/en-US/docs/Web/Events) to listen for
	 * @param listener The event listener callback that fires in response to the
	 *                 event being dispatched
	 * @param options An options object that specifies characteristics about the
	 *                event listener
	 */
	function useEventListener<
		ElementType extends (Window & typeof globalThis) | Document | Element,
		ListenerType extends keyof EventMap
	>(
		elementRef: React.RefObject<ElementType>,
		type: ListenerType,
		listener: (event: EventMap[ListenerType]) => void,
		options?: UseEventListenerOptions
	): void;

	function useEventListener(
		elementOrType: unknown,
		typeOrListener: unknown,
		listenerOrOptions?: unknown,
		options?: UseEventListenerOptions
	) {
		let element: (Window & typeof globalThis) | Document | Element | undefined;
		let type: keyof EventMap;
		let listener: (event: EventMap[typeof type]) => void;
		let elementRef: React.RefObject<typeof element> | null = null;
		if (typeof elementOrType === "string") {
			type = elementOrType as keyof EventMap;
			if (typeof typeOrListener !== "function") {
				throw new Error(
					`Expected event handler callback to be a function; received ${typeof typeOrListener}`
				);
			}
			listener = typeOrListener as typeof listener;
			options = (listenerOrOptions as UseEventListenerOptions) || {};
		} else if (
			elementOrType &&
			typeof elementOrType === "object" &&
			"current" in elementOrType
		) {
			elementRef = elementOrType as React.RefObject<typeof element>;
			type = typeOrListener as keyof EventMap;
			if (typeof listenerOrOptions !== "function") {
				throw new Error(
					`Expected event listener to be a function; received ${typeof listenerOrOptions}`
				);
			}
			listener = listenerOrOptions as typeof listener;
			options = options || {};
		} else {
			throw new Error(
				`Expected first argument to be an event type string or element ref; received ${typeof elementOrType}`
			);
		}

		let {
			capture,
			once,
			// default is inconsistent between browsers
			// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#specifications
			passive = false,
			signal,
		} = options || {};
		useEffect(() => {
			let element = elementRef ? elementRef.current : window;
			let opts = { capture, passive, once, signal };
			element?.addEventListener(type, listener, opts);
			return () => {
				element?.removeEventListener(type, listener, opts);
			};
		}, [listener, capture, elementRef, once, passive, signal, type]);
	}
	return useEventListener;
}

export const useEventListener = createUseEventListener(React.useEffect);

/**
 * A React hook that adds an event listener to a given element. If no element is
 * specified, the listener is attached to the global object.
 *
 * The event listener is added and removed within a `useLayoutEffect`.
 */
export const useEventListenerLayoutEffect =
	createUseEventListener(useLayoutEffect);

export type EventMap = ElementEventMap & DocumentEventMap & WindowEventMap;

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
	 * An `AbortSignal`. The `listener` will be removed when the given `AbortSignal`
	 * object's `abort()` method is called. If not specified, no `AbortSignal` is
	 * associated with the `listener`.
	 */
	signal?: AbortSignal;
}
