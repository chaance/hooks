import { useEffect, useRef } from 'react';

export function usePrevious(value: any): any {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}
