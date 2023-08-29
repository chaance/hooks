import { useRef } from "react";

export function useConstant<T>(fn: () => T): T {
	let ref = useRef<{ v: T }>();
	if (!ref.current) {
		ref.current = { v: fn() };
	}
	return ref.current.v;
}
