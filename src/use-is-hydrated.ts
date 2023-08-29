import { useEffect, useState } from "react";

let isHydrating = true;

/**
 * Determines whether or not the component tree has been hydrated.
 *
 * @returns Whether or not the component tree has been hydrated
 */
export function useIsHydrated() {
	let [isHydrated, setIsHydrated] = useState(() => !isHydrating);
	useEffect(() => {
		isHydrating = false;
		setIsHydrated(true);
	}, []);
	return isHydrated;
}
