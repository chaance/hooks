import { useState, useCallback } from "react";

export function useForceUpdate() {
	let [, set] = useState(() => Object.create(null));
	return useCallback(() => set(Object.create(null)), []);
}
