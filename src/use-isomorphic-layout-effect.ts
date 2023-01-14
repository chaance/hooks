import * as React from "react";

const canUseDOM = !!(
	typeof window !== "undefined" &&
	window.document &&
	window.document.createElement
);

/**
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
export const useIsomorphicLayoutEffect = canUseDOM
	? React.useLayoutEffect
	: function noop() {};

export { useIsomorphicLayoutEffect as useLayoutEffect };
