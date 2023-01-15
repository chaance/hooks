import * as React from "react";
import { useLayoutEffect } from "./use-isomorphic-layout-effect";

/**
 * A callback that is refreshed on every render in a ref for stable identity in
 * effects and memoized objects. Returns a memoized callback with a stable
 * identity across renders.
 *
 * It is important to note that in some cases the value can become stale
 * depending on the order in which some hooks are called. It is not recommended
 * to use this hook with too much indirection to prevent unexpected behavior.
 *
 * @param callback The callback to be saved
 * @param effectHook Save the callback in either `useEffect` or
 *                   `useLayoutEffect`. Defaults to `useLayoutEffect`.
 */
export function useStableCallback<T extends (...args: any[]) => any>(
	callback: T,
	effectHook?: typeof React.useEffect
): T;

export function useStableCallback<T extends (...args: any[]) => any>(
	callback: T,
	useEffect: typeof React.useEffect = useLayoutEffect
): T {
	let savedCallback = React.useRef<typeof callback>();
	useEffect(() => {
		savedCallback.current = callback;
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return React.useCallback(
		((...args) => {
			savedCallback.current?.(...args);
		}) as T,
		[]
	);
}
