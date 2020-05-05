import { useReducer, useEffect } from 'react';

export enum PromiseStates {
  Loading = 0,
  Resolved = 1,
  Error = 2,
}

export function usePromise<ResolvedType = any, ErrorType = any>(
  promise: () => Promise<ResolvedType>
) {
  const [state, dispatch] = useReducer(
    (
      state: PromiseState<ResolvedType, ErrorType>,
      action: PromiseActions<ResolvedType, ErrorType>
    ): PromiseState<ResolvedType, ErrorType> => {
      switch (action.type) {
        case PromiseStates.Loading:
          return { ...state, loading: true };
        case PromiseStates.Resolved:
          return {
            loading: false,
            response: action.response,
            error: null,
          };
        case PromiseStates.Error:
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

  useEffect(() => {
    let isCurrent = true;
    dispatch({ type: PromiseStates.Loading });
    promise()
      .then((response) => {
        if (!isCurrent) return;
        dispatch({ type: PromiseStates.Resolved, response });
      })
      .catch((error: ErrorType) => {
        dispatch({ type: PromiseStates.Error, error });
      });
    return () => {
      isCurrent = false;
    };
  }, [promise]);

  return [state.response, state.loading, state.error] as const;
}

export default usePromise;

type PromiseState<ResolvedType, ErrorType> = {
  loading: boolean;
  response: null | ResolvedType;
  error: null | ErrorType;
};

type PromiseActions<ResolvedType, ErrorType> =
  | { type: PromiseStates.Loading }
  | { type: PromiseStates.Resolved; response: ResolvedType }
  | { type: PromiseStates.Error; error: ErrorType };
