import * as React from 'react';

const PREFERS_REDUCED_MOTION_NO_PREF_QUERY =
  '(prefers-reduced-motion: no-preference)';

export function usePrefersReducedMotion(nodeRef: React.RefObject<Element>) {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  React.useEffect(() => {
    return onPrefersReducedMotionChange(
      setPrefersReducedMotion,
      (nodeRef.current?.ownerDocument?.defaultView || window) as any
    );
  }, [nodeRef]);
  return prefersReducedMotion;
}

function onPrefersReducedMotionChange(
  callback: (prefers: boolean) => any,
  globalWindow: Window & typeof globalThis
) {
  try {
    const mediaQueryList = globalWindow.matchMedia(
      PREFERS_REDUCED_MOTION_NO_PREF_QUERY
    );
    mediaQueryList.addEventListener('change', listener);
    return function () {
      mediaQueryList.removeEventListener('change', listener);
    };
  } catch (e) {}

  return function () {};

  function listener(event: MediaQueryListEvent) {
    callback(!event.matches);
  }
}
