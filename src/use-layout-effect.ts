import { useLayoutEffect as react_useLayoutEffect } from "react";
import { noop, canUseDOM } from "./lib/utils.js";

/**
 * Same as React's `useLayoutEffect` but without the annoying hydration warning
 * when called on the server.
 *
 * Yes, the warning is there for a reason and useful and blah blah blah, but
 * sometimes we know better than the computer.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
export const useLayoutEffect: typeof react_useLayoutEffect = canUseDOM
	? react_useLayoutEffect
	: noop;
