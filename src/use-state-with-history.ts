import * as React from "react";

const SET = 0;
const UNDO = 1;
const REDO = 2;

export function useStateWithHistory<ValueType>(
	defaultValue: ValueType | (() => ValueType),
	opts: { limit?: number } = {}
): [
	State: ValueType,
	Setter: React.Dispatch<React.SetStateAction<ValueType>>,
	UndoFunction: () => void,
	RedoFunction: () => void
] {
	let { limit = -1 } = opts;
	let [{ history, currentIndex }, send] = React.useReducer(
		reducer,
		{ defaultValue },
		({ defaultValue }) => {
			let history: ValueType[] = [
				typeof defaultValue === "function"
					? (defaultValue as () => ValueType)()
					: defaultValue,
			];
			return {
				history,
				currentIndex: 0,
			};
		}
	);

	let undo = React.useCallback(() => {
		send({ type: UNDO, limit });
	}, [limit]);

	let redo = React.useCallback(() => {
		send({ type: REDO, limit });
	}, [limit]);

	let setValue = React.useCallback(
		(newValue: ValueType | ((oldValue: ValueType) => ValueType)) => {
			send({ type: SET, next: newValue, limit });
		},
		[limit]
	);

	return [(history as ValueType[])[currentIndex], setValue, undo, redo];
}

function reducer<ValueType>(
	state: State<ValueType>,
	event: Event<ValueType>
): State<ValueType> {
	let limit = Number.isFinite(Number(event.limit))
		? Math.round(event.limit)
		: -1;
	switch (event.type) {
		case SET: {
			let newValue =
				typeof event.next === "function"
					? (event.next as (val: ValueType) => ValueType)(
							state.history[state.currentIndex]
					  )
					: event.next;
			if (limit > 0 && state.history.length > limit) {
				// copy history array and remove oldest entry
				let history = state.history.slice(1);
				let currentIndex = history.length - 1;
				return {
					history,
					currentIndex,
				};
			}

			let history = [...state.history, newValue];
			return {
				history,
				currentIndex: state.currentIndex + 1,
			};
		}
		case UNDO: {
			let i = state.currentIndex;
			return {
				history: state.history,
				currentIndex: i > 0 ? i - 1 : i,
			};
		}
		case REDO: {
			let i = state.currentIndex;
			return {
				history: state.history,
				currentIndex: i < state.history.length - 1 ? i + 1 : i,
			};
		}
		default:
			return state;
	}
}

interface State<ValueType> {
	history: ValueType[];
	currentIndex: number;
}

type Event<ValueType> =
	| {
			type: typeof SET;
			next: ValueType | ((oldValue: ValueType) => ValueType);
			limit: number;
	  }
	| { type: typeof UNDO; limit: number }
	| { type: typeof REDO; limit: number };
