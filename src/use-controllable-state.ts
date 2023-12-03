import * as React from "react";
import { useEffectEvent } from "./use-effect-event";

function useControllableStateWarning(controlledValue: unknown) {
	const warned = React.useRef(false);
	const wasControlled = React.useRef(controlledValue !== undefined);
	const isControlled = controlledValue !== undefined;
	React.useEffect(() => {
		if (warned.current) {
			return;
		}
		const docsUrl = "https://reactjs.org/link/controlled-components";
		if (wasControlled.current && !isControlled) {
			warned.current = true;
			console.warn(
				`Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: ${docsUrl}`,
			);
		} else if (!wasControlled.current && isControlled) {
			warned.current = true;
			console.warn(
				`Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: ${docsUrl}`,
			);
		}
	}, [isControlled]);
}

export function useControllableState<T>({
	controlledValue,
	internalState,
	onChange,
	setInternalState,
}: {
	controlledValue: T | undefined;
	internalState: T;
	onChange: ((value: T) => void) | undefined;
	setInternalState: React.Dispatch<React.SetStateAction<T>>;
}): [T, React.Dispatch<React.SetStateAction<T>>] {
	useControllableStateWarning(controlledValue);
	const isControlled = controlledValue !== undefined;
	const _onChange = useEffectEvent((value: T) => onChange?.(value));
	const _getControlledValue = useEffectEvent(() => controlledValue);
	const setState: React.Dispatch<React.SetStateAction<T>> = React.useCallback(
		(action) => {
			const currentState = _getControlledValue();
			if (currentState !== undefined) {
				const nextState = isFunction(action) ? action(currentState) : action;
				_onChange(nextState);
			} else {
				setInternalState(action);
			}
		},
		[_getControlledValue, _onChange, setInternalState],
	);
	return [isControlled ? controlledValue : internalState, setState];
}

function isFunction(value: unknown): value is Function {
	return typeof value === "function";
}
