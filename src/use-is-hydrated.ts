import * as React from "react";

let isHydrating = true;

/**
 * Determines whether or not the component tree has been hydrated.
 *
 * @returns Whether or not the component tree has been hydrated
 */
export function useIsHydrated() {
	let [isHydrated, setIsHydrated] = React.useState(() => !isHydrating);
	React.useEffect(() => {
		isHydrating = false;
		setIsHydrated(true);
	}, []);
	return isHydrated;
}
