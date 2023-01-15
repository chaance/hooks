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
	let ref: {
		get: () => HistoryState<V>;
		set: React.Dispatch<React.SetStateAction<V>>;
		undo(): void;
		redo(): void;
	} = {} as any;
	function TestComponent() {
		let state = useStateWithHistory(defaultValue, opts);
		Object.assign(ref, {
			get: () => state[0],
			set: state[1],
			undo: state[2],
			redo: state[3],
		});
		return null;
	}
	render(<TestComponent />);
	return ref;
}

describe("useStateWithHistory", () => {
	it("returns and updates state", async () => {
		let state = setup("one");
		expect(state.get()).toBe("one");
		act(() => state.set("two"));
		expect(state.get()).toBe("two");
	});

	describe("undo", () => {
		it("does not update state if history is empty", async () => {
			let state = setup("one");
			expect(state.get()).toBe("one");
			act(state.undo);
			expect(state.get()).toBe("one");
		});

		it("reverts state change", async () => {
			let state = setup("one");
			act(() => state.set("two"));
			act(() => state.set("three"));
			act(state.undo);
			expect(state.get()).toBe("two");
		});

		it("reverts to first state if at the end of history stack", async () => {
			let state = setup("one");
			act(() => state.set("two"));
			act(state.undo);
			act(state.undo);
			act(state.undo);
			act(state.undo);
			expect(state.get()).toBe("one");
		});

		it("does not update the stack if value is unchanged", async () => {
			let state = setup("one");
			act(() => state.set("two"));
			act(() => state.set("two"));
			act(state.undo);
			expect(state.get()).toBe("one");
		});
	});

	describe("redo", () => {
		it("does nothing if history is empty", async () => {
			let state = setup("one");
			expect(state.get()).toBe("one");
			act(state.redo);
			expect(state.get()).toBe("one");
		});

		it("reverts undo", async () => {
			let state = setup("one");
			act(() => state.set("two"));
			act(() => state.set("three"));
			act(state.undo);
			act(state.redo);
			expect(state.get()).toBe("three");
		});

		it("reverts to final state if at the end of history stack", async () => {
			let state = setup("one");
			act(() => state.set("two"));
			act(() => state.set("three"));
			act(state.undo);
			act(state.redo);
			act(state.redo);
			act(state.redo);
			expect(state.get()).toBe("three");
		});
	});

	describe("with { limit }", () => {
		it("limits undo history", async () => {
			let state = setup("one", { limit: 2 });
			act(() => state.set("two"));
			act(() => state.set("three"));
			act(() => state.set("four"));
			act(state.undo);
			act(state.undo);
			act(state.undo);
			act(state.undo);
			expect(state.get()).toBe("two");
		});
	});
});
