import * as React from "react";
import { useStableCallback } from "./use-stable-callback";

/**
 * Sets a timer which executes a function or specified piece of code once the
 * timer expires.
 *
 * @param callback A function to be executed after the timer expires
 * @param delay The time, in milliseconds that the timer should wait before the
 *              specified function or code is executed. If this parameter is
 *              omitted, a value of 0 is used, meaning execute in the next event
 *              cycle.
 */
export function useTimeout(
	callback: () => void,
	delay?: number | null | undefined
) {
	let stableCallback = useStableCallback(callback);
	React.useEffect(() => {
		let tick = () => stableCallback();
		let id = window.setTimeout(tick, delay || 0);
		return () => window.clearTimeout(id);
	}, [delay, stableCallback]);
}
