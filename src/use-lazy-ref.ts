import * as React from "react";
const UNINITIALIZED = Symbol("uninitialized");

/**
 * A lazily React ref lazily initialized with a function.
 *
 * @param init A function that returns the initial value of the ref.
 */
export function useLazyRef<T>(init: () => T): React.MutableRefObject<T>;
/**
 * A lazily React ref lazily initialized with a function.
 *
 * @param init A function that returns the initial value of the ref.
 * @param initArg An argument passed to the initializer function.
 */
export function useLazyRef<T, A>(
	init: (arg: A) => T,
	initArg: A,
): React.MutableRefObject<T>;

/**
 * A lazily React ref lazily initialized with a function.
 *
 * @param init A function that returns the initial value of the ref.
 */
export function useLazyRef<T, A>(
	init: (arg?: A) => T,
	initArg?: A,
): React.MutableRefObject<T> {
	const ref = React.useRef(UNINITIALIZED as T);
	if (ref.current === UNINITIALIZED) {
		ref.current = init(initArg);
	}
	return ref;
}
