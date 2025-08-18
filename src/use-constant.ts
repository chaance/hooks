import { useLazyRef } from "./use-lazy-ref";

export function useConstant<T>(fn: () => T): T {
	let ref = useLazyRef(fn);
	return ref.current;
}
