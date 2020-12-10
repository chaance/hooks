import * as React from 'react';

/**
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
export const useIsomorphicLayoutEffect = canUseDOM()
  ? React.useLayoutEffect
  : noop;

function canUseDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

function noop() {}
