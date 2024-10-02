import { useCallback, useMemo, useState } from "react";
import { isFunction } from "@chance/utils";

export function useSet<T = unknown>(
	initialValues?: readonly T[] | null,
): ReactiveSet<T> {
	let [set, setSet] = useState(() => new Set(initialValues));

	let add = useCallback<ReactiveSet<T>["add"]>((action) => {
		setSet((set) => {
			let value = isFunction(action) ? action(set) : action;
			if (set.has(value)) {
				return set;
			}
			let copy = new Set(set);
			copy.add(value);
			return copy;
		});
	}, []);

	let clear = useCallback<ReactiveSet<T>["clear"]>(() => {
		setSet((set) => {
			return set.size === 0 ? set : new Set();
		});
	}, []);

	let _delete = useCallback<ReactiveSet<T>["delete"]>(
		(value) =>
			setSet((set) => {
				if (!set.has(value)) {
					return set;
				}
				let copy = new Set(set);
				copy.delete(value);
				return copy;
			}),
		[],
	);

	let has = useCallback<ReactiveSet<T>["has"]>(
		(value) => set.has(value),
		[set],
	);

	let map = useCallback<ReactiveSet<T>["map"]>(
		(callbackFn) => {
			let result: ReturnType<typeof callbackFn>[] = [];
			for (let value of set) {
				result.push(callbackFn(value, result.length, set));
			}
			return result;
		},
		[set],
	);

	return useMemo(() => {
		return {
			raw: set,
			add,
			clear,
			delete: _delete,
			has,
			map,
			size: set.size,
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [set]);
}

export interface ReactiveSet<T> {
	raw: Set<T>;
	add(action: T | ((prevState: Set<T>) => T)): void;
	clear(): void;
	delete(value: T): void;
	has(value: T): boolean;
	map<U>(callbackFn: (value: T, index: number, set: Set<T>) => U): U[];
	readonly size: number;
}
