import * as React from "react";

const SET = 0;
const UNDO = 1;
const REDO = 2;

/**
 * Returns a stateful value, a function to update it, and `undo`/`redo`
 * functions to navigate through the state's history.
 *
 * @param initialValue The initial state value or a function to initialize it
 * @param opts Optional options object
 */
export function useStateWithHistory<ValueType>(
	initialValue: ValueType | (() => ValueType),
	opts: UseStateWithHistoryOptions = {}
): HistoryState<ValueType> {
	let { limit = -1 } = opts;
	let [{ history, currentIndex }, send] = React.useReducer(
		reducer,
		{ initialValue },
		({ initialValue }) => {
			let history: ValueType[] = [
				typeof initialValue === "function"
					? (initialValue as () => ValueType)()
					: initialValue,
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

			if (Object.is(newValue, state.history[state.currentIndex])) {
				return state;
			}

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

export type HistoryState<ValueType> = [
	State: ValueType,
	Setter: React.Dispatch<React.SetStateAction<ValueType>>,
	UndoFunction: () => void,
	RedoFunction: () => void
];

export interface UseStateWithHistoryOptions {
	/**
	 * The maximum number of entries to keep in the history
	 */
	limit?: number;
}
