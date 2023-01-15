import * as React from "react";
import { useStableCallback } from "./use-stable-callback";

export function useTimeout(callback: () => void, delay: number | null) {
	let stableCallback = useStableCallback(callback);
	React.useEffect(() => {
		function tick() {
			stableCallback();
		}
		if (delay != null) {
			let id = window.setTimeout(tick, delay);
			return () => window.clearTimeout(id);
		}
		return;
	}, [delay, stableCallback]);
}
