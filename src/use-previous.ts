import { useEffect, useReducer } from "react";

export function usePrevious<ValueType = any>(
	value: ValueType,
): ValueType | null {
	const [history, send] = useReducer<Reducer<ValueType>>(reducer, [
		null,
		value,
	]);
	useEffect(() => {
		send(value);
	}, [value]);
	return history[0];
}

type Reducer<ValueType> = (
	state: State<ValueType>,
	event: ValueType,
) => State<ValueType>;

function reducer<ValueType>(
	state: State<ValueType>,
	next: ValueType,
): State<ValueType> {
	let prev = state[1];
	if (Object.is(prev, next)) {
		return state;
	}
	return [prev, next];
}

type State<ValueType> = [ValueType | null, ValueType];
