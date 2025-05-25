import { useEffect as react_useEffect, useMemo, useState } from "react";
import type { EffectCallback, DependencyList } from "react";
import { json2mq } from "./lib/json2mq";

export function useMatchMedia(
	rawQuery: string | QueryObject | QueryObject[],
	defaultState: boolean = false,
	options: UseMatchMediaOptions = {},
): boolean {
	let { effectHook: useEffect = react_useEffect } = options;
	let [state, setState] = useState(defaultState);
	let query = useMemo(
		() => (typeof rawQuery === "object" ? json2mq(rawQuery) : rawQuery),
		[rawQuery],
	);

	useEffect(() => {
		let mql = window.matchMedia(query);
		let controller = new AbortController();
		mql.addEventListener("change", (event) => setState(event.matches), {
			signal: controller.signal,
		});
		setState(mql.matches);
		return () => controller.abort();
	}, [query]);

	return state;
}

export interface QueryObject {
	[property: string]: string | number | boolean;
}

export interface UseMatchMediaOptions {
	/**
	 * Add the listener in either `useEffect` or `useLayoutEffect`. Defaults to
	 * `useEffect`.
	 */
	effectHook?: (effect: EffectCallback, deps?: DependencyList) => void;
}
