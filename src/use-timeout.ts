import { useEffect, useRef } from "react";

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
	delay?: number | null | undefined,
) {
	const savedCallback = useRef(callback);
	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(() => {
		let tick = () => savedCallback.current?.();
		if (delay != null) {
			let id = window.setTimeout(tick, delay);
			return () => window.clearTimeout(id);
		}
	}, [delay]);
}
