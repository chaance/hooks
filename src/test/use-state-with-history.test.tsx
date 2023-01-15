import * as React from "react";
import { render, act } from "@testing-library/react";
import {
	useStateWithHistory,
	type HistoryState,
	type UseStateWithHistoryOptions,
} from "../use-state-with-history";
import { it, expect, describe } from "vitest";

function setup<V>(
	defaultValue: V | (() => V),
	opts?: UseStateWithHistoryOptions
) {
	let returnVal: HistoryState<V> = [] as any;
	function TestComponent() {
		Object.assign(returnVal, useStateWithHistory(defaultValue, opts));
		return null;
	}
	render(<TestComponent />);
	return returnVal!;
}

describe("useStateWithHistory", () => {
	it("returns and updates state", async () => {
		let returnValue = setup("one");
		let set = returnValue[1];
		expect(returnValue[0]).toBe("one");
		act(() => set("two"));
		expect(returnValue[0]).toBe("two");
	});

	describe("undo", () => {
		it("does nothing if history is empty", async () => {
			let returnValue = setup("one");
			let [, , undo] = returnValue;
			expect(returnValue[0]).toBe("one");
			act(undo);
			expect(returnValue[0]).toBe("one");
		});

		it("reverts state change", async () => {
			let returnValue = setup("one");
			let [, set, undo] = returnValue;
			act(() => set("two"));
			act(() => set("three"));
			act(undo);
			expect(returnValue[0]).toBe("two");
		});

		it("reverts to first state if at the end of history stack", async () => {
			let returnValue = setup("one");
			let [, set, undo] = returnValue;
			act(() => set("two"));
			act(undo);
			act(undo);
			act(undo);
			act(undo);
			expect(returnValue[0]).toBe("one");
		});
	});

	describe("redo", () => {
		it("does nothing if history is empty", async () => {
			let returnValue = setup("one");
			let [, , , redo] = returnValue;
			expect(returnValue[0]).toBe("one");
			act(redo);
			expect(returnValue[0]).toBe("one");
		});

		it("reverts undo", async () => {
			let returnValue = setup("one");
			let [, set, undo, redo] = returnValue;
			act(() => set("two"));
			act(() => set("three"));
			act(undo);
			act(redo);
			expect(returnValue[0]).toBe("three");
		});

		it("reverts to final state if at the end of history stack", async () => {
			let returnValue = setup("one");
			let [, set, undo, redo] = returnValue;
			act(() => set("two"));
			act(() => set("three"));
			act(undo);
			act(redo);
			act(redo);
			act(redo);
			expect(returnValue[0]).toBe("three");
		});
	});

	describe("with { limit }", () => {
		it("limits undo history", async () => {
			let returnValue = setup("one", { limit: 2 });
			let [, set, undo] = returnValue;
			act(() => set("two"));
			act(() => set("three"));
			act(() => set("four"));
			act(undo);
			act(undo);
			act(undo);
			act(undo);
			expect(returnValue[0]).toBe("two");
		});
	});
});
