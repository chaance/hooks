import { useRef, useEffect } from "react";

/**
 * Repeatedly executes a function at a set interval.
 *
 * @param callback A function to be executed at each interval
 * @param interval The interval in milliseconds. If this parameter is `null` or
 *                 `undefined` the timer will be canceled.
 */
export function useInterval(
	callback: () => void,
	interval?: number | null | undefined,
) {
	const savedCallback = useRef(callback);
	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(() => {
		let tick = () => savedCallback.current?.();
		if (interval != null) {
			let id = setInterval(tick, interval);
			return () => clearInterval(id);
		}
	}, [interval]);
}
