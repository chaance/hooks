import { useCallback } from "react";

/**
 * Composes multiple event handlers into a single function. Any handler can call
 * `event.preventDefault()` to stop subsequent handlers from being called.
 *
 * @param handlers The event handlers to compose. It is generally a good idea to
 * memoize the handlers, particularly if they are passed into a child component,
 * used in an effect or provided to React context, as the returned function will
 * otherwise be recreated on every render.
 *
 * @returns A function that will call each handler in the order it was provided.
 * If any handler calls `event.preventDefault()`, the subsequent handlers will
 * not be called.
 */
export function useComposedEventHandlers<
	T extends { defaultPrevented: boolean },
>(...handlers: Array<GenericEventHandler<T> | null | undefined>) {
	return useCallback(
		(event: T) => {
			let previousHandler: GenericEventHandler<T> | null | undefined;
			for (const handler of handlers) {
				previousHandler?.(event);
				if (!event.defaultPrevented) {
					handler?.(event);
				}
				previousHandler = handler;
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[...handlers],
	);
}

type GenericEventHandler<T extends { defaultPrevented: boolean }> = (
	event: T,
) => void;
