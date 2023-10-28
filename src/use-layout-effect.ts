import {
	useLayoutEffect as react_useLayoutEffect,
	type EffectCallback,
	type DependencyList,
} from "react";

const canUseDOM = !!(
	typeof window !== "undefined" &&
	window.document &&
	window.document.createElement
);

const noop: (...args: any) => void = () => {};

/**
 * Same as React's `useLayoutEffect` but without the annoying hydration warning
 * when called on the server.
 *
 * Yes, the warning is there for a reason and useful and blah blah blah, but
 * sometimes we know better than the computer.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
export function useLayoutEffect(effect: EffectCallback, deps?: DependencyList) {
	if (canUseDOM) {
		return react_useLayoutEffect(effect, deps);
	} else {
		return noop(effect, deps);
	}
}
