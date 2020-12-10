import * as React from 'react';

export function useStableCallback<T extends (...args: any[]) => any>(
  callback: T,
  effect: typeof React.useEffect = React.useEffect
): T {
  const savedCallback = React.useRef<typeof callback>();
  effect(() => {
    savedCallback.current = callback;
  });

  return React.useCallback(
    ((...args) => {
      savedCallback.current?.(...args);
    }) as T,
    []
  );
}
