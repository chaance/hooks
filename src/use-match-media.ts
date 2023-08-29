import * as React from "react";
import { json2mq } from "./lib/json2mq";

/**
 * Returns whether or not a CSS media query matches.
 *
 * @param rawQuery A string, object or array of objects representing CSS media
 *                 queries
 * @param options
 */
export function useMatchMedia(
	rawQuery: string | QueryObject | QueryObject[],
	options?: UseMatchMediaOptions,
): boolean;

/**
 * Returns whether or not a CSS media query matches.
 *
 * @param rawQuery A string, object or array of objects representing CSS media
 *                 queries
 * @param defaultState The default state to return before the media query can be
 *                     evaluated
 * @param options
 */
export function useMatchMedia(
	rawQuery: string | QueryObject | QueryObject[],
	defaultState: boolean,
	options?: UseMatchMediaOptions,
): boolean;

export function useMatchMedia(
	rawQuery: string | QueryObject | QueryObject[],
	optionsOrDefaultState?: boolean | UseMatchMediaOptions,
	options?: UseMatchMediaOptions,
): boolean {
	let defaultState =
		typeof optionsOrDefaultState === "boolean" ? optionsOrDefaultState : false;
	let { effectHook: useEffect = React.useEffect } =
		options || (optionsOrDefaultState as UseMatchMediaOptions) || {};

	let [state, setState] = React.useState(defaultState);
	let query = React.useMemo(
		() => (typeof rawQuery === "object" ? json2mq(rawQuery) : rawQuery),
		[rawQuery],
	);

	useEffect(() => {
		let current = true;
		let mql = window.matchMedia(query);
		mql.addEventListener("change", handleChange);
		setState(mql.matches);
		return () => {
			current = false;
			mql.removeEventListener("change", handleChange);
		};
		function handleChange() {
			if (current) {
				setState(mql.matches);
			}
		}
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
	effectHook?: typeof React.useEffect;
}
