import { useState } from 'react';

export function useForceUpdate() {
  const [value, set] = useState(true);
  return () => set(!value);
}
