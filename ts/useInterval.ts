import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => any, delay: number) => {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect((): void | (() => void) => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => void clearInterval(id);
    }
  }, [delay]);
};
