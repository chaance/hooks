import * as React from 'react';

export function useForceUpdate() {
  const [value, set] = React.useState(true);
  return () => set(!value);
}
