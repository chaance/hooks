import { useRef, useEffect } from 'react';

export function useInterval(callback: () => void, interval: number | null) {
  const savedCallback = useRef<typeof callback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    if (interval !== null) {
      const id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
    return;
  }, [interval]);
}

export default useInterval;
