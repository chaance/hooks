import * as React from "react";

let isHydrating = true;

export function useIsHydrated() {
	let [isHydrated, setIsHydrated] = React.useState(() => !isHydrating);
	React.useEffect(() => {
		isHydrating = false;
		setIsHydrated(true);
	}, []);
	return isHydrated;
}
