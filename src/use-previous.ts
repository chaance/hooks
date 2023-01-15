import * as React from "react";

/**
 * @deprecated This hook will give you a bad time with concurrent features in
 * React 18. Do not use, probably.
 */
export function usePrevious<ValueType = any>(value: ValueType) {
	let ref = React.useRef<ValueType | null>(null);
	React.useEffect(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}
