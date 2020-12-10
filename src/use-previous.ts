import * as React from 'react';

export function usePrevious<ValueType = any>(value: ValueType) {
  const ref = React.useRef<ValueType | null>(null);
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default usePrevious;
