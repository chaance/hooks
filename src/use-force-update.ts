import * as React from "react";

export function useForceUpdate() {
	let [, set] = React.useState(() => Object.create(null));
	return React.useCallback(() => set(Object.create(null)), []);
}
