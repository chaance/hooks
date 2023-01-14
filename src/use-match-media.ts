import * as React from "react";
import json2mq from "json2mq";

export function createUseMatchMedia(effect: typeof React.useEffect) {
	return function (
		rawQuery: QueryObject | QueryObject[],
		defaultState = false
	) {
		let [state, setState] = React.useState(defaultState);
		let query = json2mq(rawQuery);

		effect(() => {
			let current = true;
			let mql = window.matchMedia(query);
			mql.addEventListener("change", handleChange);
			setState(mql.matches);

			function handleChange() {
				if (current) {
					setState(mql.matches);
				}
			}

			return () => {
				current = false;
				mql.removeEventListener("change", handleChange);
			};
		}, [query]);

		return state;
	};
}

export const useMatchMedia = createUseMatchMedia(React.useEffect);
export const useMatchMediaLayoutEffect = createUseMatchMedia(
	React.useLayoutEffect
);

export type QueryObject = {
	[property: string]: string | number | boolean;
};
