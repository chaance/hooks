import { useEffect, useState } from "react";

const PREFERS_REDUCED_MOTION_NO_PREF_QUERY =
	"(prefers-reduced-motion: no-preference)";

export function usePrefersReducedMotion(nodeRef: React.RefObject<Element>) {
	let [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
	useEffect(() => {
		return onPrefersReducedMotionChange(
			setPrefersReducedMotion,
			nodeRef.current?.ownerDocument?.defaultView || window,
		);
	}, [nodeRef]);
	return prefersReducedMotion;
}

function onPrefersReducedMotionChange(
	callback: (prefers: boolean) => any,
	globalWindow: Window & typeof globalThis,
) {
	try {
		let mediaQueryList = globalWindow.matchMedia(
			PREFERS_REDUCED_MOTION_NO_PREF_QUERY,
		);
		mediaQueryList.addEventListener("change", listener);
		return () => {
			mediaQueryList.removeEventListener("change", listener);
		};
	} catch (e) {
		return () => {};
	}

	function listener(event: MediaQueryListEvent) {
		callback(!event.matches);
	}
}
