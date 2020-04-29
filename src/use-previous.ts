import { useEffect, useRef } from 'react';

export function usePrevious<ValueType = any>(value: ValueType) {
  const ref = useRef<ValueType | null>(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default usePrevious;
