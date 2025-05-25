import type { JsonValue } from "type-fest";

/**
 * Slightly more robust JSON parsing function that handles JSON primitives and
 * returns a more strongly typed value.
 */
export function parseJson(
	value: null | undefined | boolean | number | string,
): JsonValue {
	if (
		value === null ||
		typeof value === "boolean" ||
		typeof value === "number"
	) {
		return value;
	}

	if (value === undefined) {
		return null;
	}

	return JSON.parse(value);
}

export function isFunction(value: unknown): value is (...args: any[]) => any {
	return typeof value === "function";
}
