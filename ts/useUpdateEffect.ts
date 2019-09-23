import { useRef, useEffect } from 'react';

// You should probably not use this much, but if you do...godspeed

/**
 * Run an effect only once a component has mounted.
 * @param effect
 * @param deps
 */
export function useUpdateEffect(
  effect: React.EffectCallback,
  deps?: readonly any[] | undefined
) {
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
