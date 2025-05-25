import { useSyncExternalStore } from "react";

const getSnapshot = () => true;
const getServerSnapshot = () => false;
const subscribe = () => () => void 0;

/**
 * Determines whether or not the component tree has been hydrated.
 *
 * @returns Whether or not the component tree has been hydrated
 */
export function useIsHydrated() {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
