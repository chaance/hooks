const CUSTOM_EVENT_NAME = "chance:localstorage";

const canUseStorage = !!(
	typeof window !== "undefined" && typeof window.localStorage !== "undefined"
);

export interface BaseStorage {
	readonly length: number;
	clear(): void;
	getItem(key: string): string | null;
	key(index: number): string | null;
	removeItem(key: string): void;
	setItem(key: string, value: string): void;
}

type StorageEventDetail =
	| { type: "CLEAR"; storageEvent?: StorageEvent }
	| {
			type: "SET";
			key: string;
			newValue: string;
			oldValue: string | null;
			storageEvent?: StorageEvent;
	  }
	| { type: "REMOVE"; key: string; storageEvent?: StorageEvent };

const globalStorageListenerMap = new WeakMap<
	(event: CustomEvent<StorageEventDetail>) => void,
	(event: StorageEvent) => void
>();

/**
 * The `storage` event is not dispatched when localStorage is updated from the
 * same window. This is a wrapper that will dispatch a custom event any time
 * localStorage is updated anywhere.
 */
export class LocalStorage {
	storage: BaseStorage | null = null;
	constructor(storage?: BaseStorage) {
		this.storage = storage ?? (canUseStorage ? window.localStorage : null);
	}
	get length() {
		return this.storage?.length ?? 0;
	}
	key(index: number): string | null {
		return this.storage?.key(index) ?? null;
	}
	setItem(key: string, value: string) {
		if (!this.storage) return;
		const newValue = String(value);
		const oldValue = this.storage.getItem(key);
		if (oldValue !== newValue) {
			this.storage.setItem(key, newValue);
			LocalStorage.dispatchEvent({ type: "SET", key, newValue, oldValue });
		}
	}

	getItem(key: string): string | null {
		return this.storage?.getItem(key) ?? null;
	}

	removeItem(key: string) {
		if (!this.storage) return;
		const currentValue = this.storage.getItem(key);
		if (currentValue !== null) {
			this.storage.removeItem(key);
			LocalStorage.dispatchEvent({ type: "REMOVE", key });
		}
	}

	clear() {
		if (!this.storage) return;
		if (this.storage.length > 0) {
			this.storage.clear();
			LocalStorage.dispatchEvent({ type: "CLEAR" });
		}
	}

	static dispatchEvent(detail: StorageEventDetail) {
		if (canUseStorage) {
			window.dispatchEvent(new CustomEvent(CUSTOM_EVENT_NAME, { detail }));
		}
	}

	static addEventListener(
		listener: (event: CustomEvent<StorageEventDetail>) => void,
		options?: AddEventListenerOptions,
	) {
		if (canUseStorage) {
			const globalListener = (event: StorageEvent) => {
				let detail: StorageEventDetail;
				if (event.key === null) {
					detail = { type: "CLEAR", storageEvent: event };
				} else if (event.newValue === null) {
					detail = { type: "REMOVE", key: event.key, storageEvent: event };
				} else {
					detail = {
						type: "SET",
						key: event.key,
						newValue: event.newValue,
						oldValue: event.oldValue,
						storageEvent: event,
					};
				}
				listener(new CustomEvent(CUSTOM_EVENT_NAME, { detail }));
			};
			globalStorageListenerMap.set(listener, globalListener);
			window.addEventListener("storage", globalListener, options);
			window.addEventListener(
				CUSTOM_EVENT_NAME,
				listener as EventListener,
				options,
			);
		}
	}

	static removeEventListener(
		listener: (event: CustomEvent<StorageEventDetail>) => void,
		options?: EventListenerOptions,
	) {
		if (canUseStorage) {
			const globalListener = globalStorageListenerMap.get(listener);
			if (globalListener) {
				window.removeEventListener("storage", globalListener, options);
			}
			window.removeEventListener(
				CUSTOM_EVENT_NAME,
				listener as EventListener,
				options,
			);
		}
	}
}
