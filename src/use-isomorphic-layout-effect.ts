import { useLayoutEffect as react_useLayoutEffect } from "react";

const canUseDOM = !!(
	typeof window !== "undefined" &&
	window.document &&
	window.document.createElement
);

/**
 * `useLayoutEffect` but without the annoying hydration warning when called on
 * the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
export const useIsomorphicLayoutEffect = canUseDOM
	? react_useLayoutEffect
	: function useLayoutEffect() {};

export { useIsomorphicLayoutEffect as useLayoutEffect };
