import { useLayoutEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

export function getScrollPosition(): ScrollPosition {
  return isBrowser
    ? { x: window.pageXOffset, y: window.pageYOffset }
    : { x: 0, y: 0 };
}

export const useScrollPosition = (): ScrollPosition => {
  const [position, setScrollPosition] = useState<ScrollPosition>(
    getScrollPosition()
  );

  useLayoutEffect((): any => {
    let requestRunning: number | null = null;
    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition());
          requestRunning = null;
        });
      }
    }

    if (isBrowser) {
      window.addEventListener('scroll', handleScroll);
      return () => void window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return position;
};

export const useScrollXPosition = (): number => {
  const { x } = useScrollPosition();
  return x;
};

export const useScrollYPosition = (): number => {
  const { y } = useScrollPosition();
  return y;
};

////////////////////////////////////////////////////////////////////////////////
// TYPES
////////////////////////////////////////////////////////////////////////////////
export interface ScrollPosition {
  readonly x: number;
  readonly y: number;
}
