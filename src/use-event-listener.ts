import * as React from 'react';
import { useStableCallback } from './use-stable-callback';

function createUseEventListener(effect: typeof React.useEffect) {
  return function <
    ElementType extends (Window & typeof globalThis) | Document | Element,
    ListenerType extends keyof EventMap
  >(
    eventName: ListenerType,
    callback: (event: EventMap[ListenerType]) => void,
    // @ts-ignore
    element: ElementType = window
  ) {
    const stableCallback = useStableCallback(callback, effect);
    effect(() => {
      element?.addEventListener?.(eventName, listener as any);
      return () => {
        element?.removeEventListener?.(eventName, listener as any);
      };
      function listener(event: EventMap[ListenerType]) {
        stableCallback(event);
      }
    }, [element, eventName, stableCallback]);
  };
}

export const useEventListener = createUseEventListener(React.useEffect);
export const useEventListenerLayoutEffect = createUseEventListener(
  React.useLayoutEffect
);
/**
 * @alias useEventListenerLayoutEffect
 * @deprecated
 */
export const useLayoutEventListener = useEventListenerLayoutEffect
export type EventMap = ElementEventMap & DocumentEventMap & WindowEventMap;
