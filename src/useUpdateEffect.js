import { useRef, useEffect } from 'react';

// You should probably not use this much, but if you do...godspeed
export function useUpdateEffect(effect, deps) {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      effect();
    } else {
      mounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
