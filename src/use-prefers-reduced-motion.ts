import { useEffect as react_useEffect, useState } from "react";
import type { UseMatchMediaOptions } from "./use-match-media.js";

const PREFERS_REDUCED_MOTION_NO_PREF_QUERY =
	"(prefers-reduced-motion: no-preference)";

export function usePrefersReducedMotion(
	nodeRef: React.RefObject<Element>,
	options: UseMatchMediaOptions = {},
) {
	let { effectHook: useEffect = react_useEffect } = options;
	let [state, setState] = useState(true);
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
