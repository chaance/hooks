import * as React from 'react';
import { useStableCallback } from './use-stable-callback';

export function useInterval(callback: () => void, interval: number | null) {
  const stableCallback = useStableCallback(callback);

  React.useEffect(() => {
    function tick() {
      stableCallback();
    }
    if (interval !== null) {
      const id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
    return;
  }, [interval, stableCallback]);
}

export default useInterval;
