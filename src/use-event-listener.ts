import { useEffect, useLayoutEffect, useRef } from 'react';

function createUseEventListener(
  effect: (
    effect: React.EffectCallback,
    deps?: React.DependencyList | undefined
  ) => void
) {
  return function <
    ElementType extends Window | Document | Element,
    ListenerType extends keyof EventMap
  >(
    eventName: ListenerType,
    callback: (event: EventMap[ListenerType]) => void,
    // @ts-ignore
    element: ElementType = global
  ) {
    const savedCallback = useRef<typeof callback>();
    effect(() => {
      savedCallback.current = callback;
    }, [callback, element]);

    effect(() => {
      if (!(element && element.addEventListener)) {
        return;
      }
      element.addEventListener(eventName, listener as any);
      return () => {
        element.removeEventListener(eventName, listener as any);
      };
      function listener(event: EventMap[ListenerType]) {
        savedCallback.current?.(event);
      }
    }, [element, eventName]);
  };
}

export const useEventListener = createUseEventListener(useEffect);
export const useLayoutEventListener = createUseEventListener(useLayoutEffect);

export default useEventListener;

export type EventMap = ElementEventMap & DocumentEventMap & WindowEventMap;
