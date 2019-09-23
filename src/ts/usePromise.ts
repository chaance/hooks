import { useEffect, useReducer, DependencyList } from 'react';

const resolvePromise = (promise: any) => {
  if (typeof promise === 'function') {
    return promise();
  }

  return promise;
};

const initialState: UsePromiseState = {
  error: undefined,
  result: undefined,
  state: 'pending',
};

export const reducerForUsePromise: UsePromiseReducer = (
  state: UsePromiseState,
  action: UsePromiseAction
) => {
  switch (action.type) {
    case 'pending':
      return { error: undefined, result: undefined, state: 'pending' };
    case 'resolved':
      return {
        error: undefined,
        result: action.payload,
        state: 'resolved',
      };
    case 'rejected':
      return {
        error: action.payload,
        result: undefined,
        state: 'rejected',
      };
    default:
      return state;
  }
};

export function usePromise<T>(
  promise: Promise<T>,
  deps?: DependencyList
): [T, any, PromiseStates] {
  const [{ error, result, state }, dispatch] = useReducer<UsePromiseReducer>(
    reducerForUsePromise,
    initialState
  );

  useEffect(() => {
    promise = resolvePromise(promise);

    if (!promise) return;

    let canceled = false;

    dispatch({ type: 'pending' });

    promise.then(
      (res: any) =>
        !canceled &&
        dispatch({
          payload: res,
          type: 'resolved',
        }),
      (err: any) =>
        !canceled &&
        dispatch({
          payload: err,
          type: 'rejected',
        })
    );

    return () => {
      canceled = true;
    };
  }, deps);

  return [result, error, state];
}

////////////////////////////////////////////////////////////////////////////////
// TYPES
////////////////////////////////////////////////////////////////////////////////
export interface UsePromiseState {
  error: any;
  result: any;
  state: PromiseStates;
}

export interface UsePromiseState {
  error: any;
  result: any;
  state: PromiseStates;
}

export interface UsePromiseAction {
  type?: PromiseStates;
  payload?: any;
}

export type PromiseStates = 'pending' | 'rejected' | 'resolved';

export type UsePromiseReducer = (
  state: UsePromiseState,
  action: UsePromiseAction
) => UsePromiseState;
