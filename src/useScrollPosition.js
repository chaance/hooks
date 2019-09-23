import { useLayoutEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

export function getScrollPosition() {
  return isBrowser
    ? { x: window.pageXOffset, y: window.pageYOffset }
    : { x: 0, y: 0 };
}

export const useScrollPosition = () => {
  const [position, setScrollPosition] = useState(getScrollPosition());

  useLayoutEffect(() => {
    let requestRunning = null;
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

export const useScrollXPosition = () => {
  const { x } = useScrollPosition();
  return x;
};

export const useScrollYPosition = () => {
  const { y } = useScrollPosition();
  return y;
};
