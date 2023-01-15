import * as React from "react";

const LOADING = 0;
const RESOLVED = 1;
const ERROR = 2;

export function usePromise<ResolvedType = any, ErrorType = any>(
	promise: () => Promise<ResolvedType>
) {
	let [state, dispatch] = React.useReducer(
		(
			state: PromiseState<ResolvedType, ErrorType>,
			action: PromiseActions<ResolvedType, ErrorType>
		): PromiseState<ResolvedType, ErrorType> => {
			switch (action.type) {
				case LOADING:
					return { ...state, loading: true };
				case RESOLVED:
					return {
						loading: false,
						response: action.response,
						error: null,
					};
				case ERROR:
					return {
						loading: false,
						response: null,
						error: action.error,
					};
				default:
					return state;
			}
		},
		{
			loading: false,
			response: null,
			error: null,
		}
	);

	React.useEffect(() => {
		let isCurrent = true;
		dispatch({ type: LOADING });
		promise()
			.then((response) => {
				if (!isCurrent) return;
				dispatch({ type: RESOLVED, response });
			})
			.catch((error: ErrorType) => {
				dispatch({ type: ERROR, error });
			});
		return () => {
			isCurrent = false;
		};
	}, [promise]);

	return [state.response, state.loading, state.error] as const;
}

type PromiseState<ResolvedType, ErrorType> = {
	loading: boolean;
	response: null | ResolvedType;
	error: null | ErrorType;
};

type PromiseActions<ResolvedType, ErrorType> =
	| { type: typeof LOADING }
	| { type: typeof RESOLVED; response: ResolvedType }
	| { type: typeof ERROR; error: ErrorType };
