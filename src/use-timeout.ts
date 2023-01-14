import * as React from "react";
import { useStableCallback } from "./use-stable-callback";

export function useTimeout(callback: () => void, delay: number | null) {
	const stableCallback = useStableCallback(callback);

	React.useEffect(() => {
		function tick() {
			stableCallback();
		}
		if (delay != null) {
			const id = window.setTimeout(tick, delay);
			return () => window.clearTimeout(id);
		}
		return;
	}, [delay, stableCallback]);
}

export default useTimeout;
