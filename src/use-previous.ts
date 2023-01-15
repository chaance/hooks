import * as React from "react";

const SET = 0;

export function usePrevious<ValueType = any>(
	value: ValueType
): ValueType | null {
	let [history, send] = React.useReducer(reducer, [null, value]);
	React.useEffect(() => {
		send({ type: SET, next: value });
	}, [value]);
	return history[0] as ValueType;
}

function reducer<ValueType>(
	state: State<ValueType>,
	event: Event<ValueType>
): State<ValueType> {
	switch (event.type) {
		case SET: {
			let prev = state[1];
			if (Object.is(prev, event.next)) {
				return state;
			}
			return [prev, event.next];
		}
		default:
			return state;
	}
}

type State<ValueType> = [ValueType | null, ValueType];

type Event<ValueType> = {
	type: typeof SET;
	next: ValueType;
};
