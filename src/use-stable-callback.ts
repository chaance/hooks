import * as React from "react";
import { useLayoutEffect } from "./use-isomorphic-layout-effect";

export function useStableCallback<T extends (...args: any[]) => any>(
	callback: T,
	useEffect: typeof React.useEffect = useLayoutEffect
): T {
	let savedCallback = React.useRef<typeof callback>();
	useEffect(() => {
		savedCallback.current = callback;
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return React.useCallback(
		((...args) => {
			savedCallback.current?.(...args);
		}) as T,
		[]
	);
}
