import * as React from "react";

let isHydrating = true;

export function useHydrated() {
	let [isHydrated, setIsHydrated] = React.useState(() => !isHydrating);
	React.useEffect(() => {
		isHydrating = false;
		setIsHydrated(true);
	}, []);
	return isHydrated;
}
