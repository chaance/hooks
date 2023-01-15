import * as React from "react";
import { render, act } from "@testing-library/react";
import { usePrevious } from "../use-previous";
import { it, expect, describe } from "vitest";

function setup<V>(value: V) {
	let ref: {
		get(): V | null;
		set: React.Dispatch<React.SetStateAction<V | null>>;
	} = {} as any;
	function TestComponent() {
		let [state, set] = React.useState(value);
		let prev = usePrevious(state);
		Object.assign(ref, { get: () => prev, set });
		return null;
	}
	render(<TestComponent />);
	return ref;
}

describe("usePrevious", () => {
	it("returns `null` if state is never set", async () => {
		let state = setup("one");
		expect(state.get()).toBe(null);
	});
	it("returns the previous value if state has changed", async () => {
		let state = setup("one");
		act(() => state.set("two"));
		expect(state.get()).toBe("one");
	});
	it("returns the previous value if state has been set but the value hasn't changed", async () => {
		let state = setup("one");
		act(() => state.set("two"));
		act(() => state.set("two"));
		expect(state.get()).toBe("one");
	});
});
