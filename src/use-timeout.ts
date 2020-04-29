import { useRef, useEffect } from 'react';

export function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef<typeof callback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    if (delay !== null) {
      const id = window.setTimeout(tick, delay);
      return () => window.clearTimeout(id);
    }
    return;
  }, [delay]);
}

export default useTimeout;
