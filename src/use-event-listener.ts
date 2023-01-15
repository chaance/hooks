import * as React from "react";
import { useLayoutEffect } from "./use-isomorphic-layout-effect";

function createUseEventListener(useEffect: typeof React.useEffect) {
	return function <
		ElementType extends (Window & typeof globalThis) | Document | Element,
		ListenerType extends keyof EventMap
	>(
		eventName: ListenerType,
		callback: (event: EventMap[ListenerType]) => void,
		// @ts-ignore
		element: ElementType = global,
		options?: AddEventListenerOptions
	) {
		let {
			capture,
			once,
			// default is inconsistent between browsers
			// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#specifications
			passive = false,
			signal,
		} = options || {};
		useEffect(() => {
			let opts = { capture, passive, once, signal };
			element.addEventListener(eventName, listener, opts);
			return () => {
				element.removeEventListener(eventName, listener, opts);
			};
			function listener(event: any) {
				callback(event);
			}
		}, [element, eventName, callback, capture, passive, once, signal]);
	};
}

export const useEventListener = createUseEventListener(React.useEffect);
export const useEventListenerLayoutEffect =
	createUseEventListener(useLayoutEffect);

/**
 * @alias useEventListenerLayoutEffect
 * @deprecated
 */
export const useLayoutEventListener = useEventListenerLayoutEffect;
export type EventMap = ElementEventMap & DocumentEventMap & WindowEventMap;
