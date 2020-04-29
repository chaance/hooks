import { useReducer, useEffect } from 'react';

enum PromiseActionTypes {
  Loading = 0,
  Resolved = 1,
  Error = 2,
}

export function usePromise<T = any, E = any>(promise: () => Promise<T>) {
  const [state, dispatch] = useReducer(
    (
      state: PromiseState<T, E>,
      action: PromiseActions<T, E>
    ): PromiseState<T, E> => {
      switch (action.type) {
        case PromiseActionTypes.Loading:
          return { ...state, loading: true };
        case PromiseActionTypes.Resolved:
          return {
            loading: false,
            response: action.response,
            error: null,
          };
        case PromiseActionTypes.Error:
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
    dispatch({ type: PromiseActionTypes.Loading });
    promise()
      .then((response) => {
        if (!isCurrent) return;
        dispatch({ type: PromiseActionTypes.Resolved, response });
      })
      .catch((error) => {
        dispatch({ type: PromiseActionTypes.Error, error });
      });
    return () => {
      isCurrent = false;
    };
  }, [promise]);

  return [state.response, state.loading, state.error] as const;
}

export default usePromise;

type PromiseState<T, E> = {
  loading: boolean;
  response: null | T;
  error: null | E;
};

type PromiseActions<T, E> =
  | { type: PromiseActionTypes.Loading }
  | { type: PromiseActionTypes.Resolved; response: T }
  | { type: PromiseActionTypes.Error; error: E };
