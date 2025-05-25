import * as React from "react";
import type { BaseStorage } from "./lib/local-storage.js";
import { LocalStorage } from "./lib/local-storage.js";
import { isFunction, parseJson } from "./lib/utils.js";
import type { JsonValue } from "type-fest";

interface LocalStorageContextValue
	extends Omit<BaseStorage, "getItem" | "setItem"> {
	getItem<T extends JsonValue = JsonValue>(key: string): T | null;
	setItem<T extends JsonValue = JsonValue>(key: string, value: T): void;
}

const LocalStorageContext =
	React.createContext<LocalStorageContextValue | null>(null);
LocalStorageContext.displayName = "LocalStorageContext";

function subscribe(callback: () => void) {
	LocalStorage.addEventListener(callback);
	return () => {
		LocalStorage.removeEventListener(callback);
	};
}

export interface LocalStorageProviderProps {
	children?: React.ReactNode;
}

export const LocalStorageProvider: React.FC<LocalStorageProviderProps> = ({
	children,
}) => {
	const storage = React.useSyncExternalStore<Storage>(
		subscribe,
		React.useCallback(() => {
			return new LocalStorage();
		}, []),
	);

	return (
		<LocalStorageContext.Provider
			value={React.useMemo(
				() => ({
					getItem: <T extends JsonValue = JsonValue>(key: string): T | null => {
						const storeValue = storage.getItem(key);
						try {
							// TODO: consider validating the type here
							return storeValue ? (parseJson(storeValue) as T) : null;
						} catch {
							console.warn(`useLocalStorage: Invalid JSON for key "${key}".`);
						}
						return null;
					},
					setItem: <T extends JsonValue = JsonValue>(key: string, value: T) => {
						if (value === undefined || value === null) {
							storage.removeItem(key);
						} else {
							try {
								const serialized = JSON.stringify(value);
								storage.setItem(key, serialized);
							} catch {
								console.warn(
									`useLocalStorage: Failed to serialize value for key "${key}". Ignoring update.`,
								);
							}
						}
					},
					get length() {
						return storage.length;
					},
					key: storage.key.bind(storage),
					removeItem: storage.removeItem.bind(storage),
					clear: storage.clear.bind(storage),
				}),
				[storage],
			)}
		>
			{children}
		</LocalStorageContext.Provider>
	);
};

function useLocalStorageContext() {
	const storage = React.useContext(LocalStorageContext);
	if (!storage) {
		throw new Error(
			"`useLocalStorage` must be used within a `LocalStorageProvider`",
		);
	}
	return storage;
}

export function useLocalStorage<T extends JsonValue = JsonValue>(
	key: string,
): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>];
export function useLocalStorage<T extends JsonValue = JsonValue>(
	key: string,
	defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>];

export function useLocalStorage<T = unknown>(key: string, defaultValue?: T) {
	const storage = useLocalStorageContext();

	const setState = React.useCallback<React.Dispatch<React.SetStateAction<any>>>(
		(action) => {
			let nextState: any;
			if (isFunction(action)) {
				const currentValue = storage.getItem(key) ?? defaultValue;
				nextState = action(currentValue);
			} else {
				nextState = action;
			}

			if (nextState === undefined || nextState === null) {
				storage.removeItem(key);
			} else {
				storage.setItem(key, nextState);
			}
		},
		[storage, key, defaultValue],
	);

	// memoize since `getItem` parses JSON
	const value = React.useMemo(() => storage.getItem(key), [storage, key]);
	return [value ?? defaultValue, setState];
}
