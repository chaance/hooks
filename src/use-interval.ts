import * as React from "react";
import { useStableCallback } from "./use-stable-callback";

export function useInterval(
	callback: () => void,
	interval: number | null | undefined
) {
	let stableCallback = useStableCallback(callback);
	React.useEffect(() => {
		let tick = () => stableCallback();
		let id = setInterval(tick, interval || 0);
		return () => clearInterval(id);
	}, [interval, stableCallback]);
}
