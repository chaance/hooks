import { useEffect, useState } from "react";

const PREFERS_REDUCED_MOTION_NO_PREF_QUERY =
	"(prefers-reduced-motion: no-preference)";

export function usePrefersReducedMotion(nodeRef: React.RefObject<Element>) {
	let [state, setState] = useState(false);
	useEffect(() => {
		const globalWindow = nodeRef.current?.ownerDocument?.defaultView || window;
		let mql = globalWindow.matchMedia(PREFERS_REDUCED_MOTION_NO_PREF_QUERY);
		let controller = new AbortController();
		mql.addEventListener("change", (event) => setState(!event.matches), {
			signal: controller.signal,
		});
		setState(!mql.matches);
		return () => controller.abort();
	}, [nodeRef]);

	return state;
}
