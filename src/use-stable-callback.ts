import * as React from "react";

export function useStableCallback<T extends (...args: any[]) => any>(
	callback: T,
	effect: typeof React.useEffect = React.useEffect
): T {
	const savedCallback = React.useRef<typeof callback>();
	effect(() => {
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
