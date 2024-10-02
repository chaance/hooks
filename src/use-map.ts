import { useCallback, useMemo, useState } from "react";
import { isFunction } from "@chance/utils";

export function useMap<K = unknown, V = unknown>(
	initialEntries?: readonly (readonly [K, V])[] | null,
): ReactiveMap<K, V> {
	let [map, setMap] = useState(() => new Map(initialEntries));

	let clear = useCallback<ReactiveMap<K, V>["clear"]>(() => {
		setMap((map) => {
			return map.size === 0 ? map : new Map();
		});
	}, []);

	let _delete = useCallback<ReactiveMap<K, V>["delete"]>((key) => {
		setMap((map) => {
			if (!map.has(key)) {
				return map;
			}

			let copy = new Map(map);
			copy.delete(key);
			return copy;
		});
	}, []);

	let get = useCallback<ReactiveMap<K, V>["get"]>((key) => map.get(key), [map]);

	let has = useCallback<ReactiveMap<K, V>["has"]>((key) => map.has(key), [map]);

	let set = useCallback<ReactiveMap<K, V>["set"]>((key, action) => {
		setMap((map) => {
			let current = map.get(key);
			let next = isFunction(action) ? action(current, map) : action;
			if (current === next) {
				return map;
			}
			return new Map(map.set(key, next));
		});
	}, []);

	let _map = useCallback<ReactiveMap<K, V>["map"]>(
		(callbackFn) => {
			let result: ReturnType<typeof callbackFn>[] = [];
			for (let entry of map) {
				result.push(callbackFn(entry, result.length, map));
			}
			return result;
		},
		[map],
	);

	return useMemo(() => {
		return {
			raw: map,
			clear,
			delete: _delete,
			get,
			has,
			set,
			size: map.size,
			map: _map,
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map]);
}

export interface ReactiveMap<K, V> {
	raw: Map<K, V>;
	clear(): void;
	delete(key: K): void;
	get(key: K): V | undefined;
	has(key: K): boolean;
	set(
		key: K,
		action: V | ((prevValue: V | undefined, prevState: Map<K, V>) => V),
	): void;
	map<U>(callbackFn: (entry: [K, V], index: number, map: Map<K, V>) => U): U[];
	readonly size: number;
}
