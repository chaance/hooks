import { useEffect } from 'react';

const hasWindow = typeof window !== 'undefined';

export function useAnimationEndListener(element, callback) {
  const handleAnimationEnd = event => {
    callback(event, element);
  };
  useEffect(() => {
    if (hasWindow) {
      element.addEventListener('animationend', handleAnimationEnd);
      return () =>
        element.removeEventListener('animationend', handleAnimationEnd);
    }
  }, [element]);
}
