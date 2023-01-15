import * as React from "react";

export function useConstant<T>(fn: () => T): T {
	let ref = React.useRef<{ v: T }>();
	if (!ref.current) {
		ref.current = { v: fn() };
	}
	return ref.current.v;
}
