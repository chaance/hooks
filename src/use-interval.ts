import { useRef, useEffect } from "react";

export function useInterval(
	callback: () => void,
	interval: number | null | undefined,
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
