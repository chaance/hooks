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
    element: ElementType = global,
    options: AddEventListenerOptions = {}
  ) {
    const { capture, passive, once } = options;
    const stableCallback = useStableCallback(callback, effect);
    effect(() => {
      const options = { capture, passive, once };
      element.addEventListener(eventName, listener, options);
      return () => {
        element.removeEventListener(eventName, listener, options);
      };

      function listener(event: any) {
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
export const useLayoutEventListener = useEventListenerLayoutEffect;
export type EventMap = ElementEventMap & DocumentEventMap & WindowEventMap;
