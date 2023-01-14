import * as React from "react";

export function createUseUpdateEffect(effect: typeof React.useEffect) {
	return function useUpdateEffectHook(
		effectCallback: React.EffectCallback,
		deps?: React.DependencyList
	) {
		const mounted = React.useRef(false);
		effect(() => {
			if (mounted.current) {
				effectCallback();
			} else {
				mounted.current = true;
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, deps);
	};
}

export const useUpdateEffect = createUseUpdateEffect(React.useEffect);
export const useUpdateLayoutEffect = createUseUpdateEffect(
	React.useLayoutEffect
);
