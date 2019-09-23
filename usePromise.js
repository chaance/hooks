import { useEffect, useReducer, DependencyList } from 'react';

const resolvePromise = promise => {
  if (typeof promise === 'function') {
    return promise();
  }

  return promise;
};

const initialState = {
  error: undefined,
  result: undefined,
  state: 'pending',
};

export const reducerForUsePromise = (state, action) => {
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

export function usePromise(promise, deps) {
  const [{ error, result, state }, dispatch] = useReducer(
    reducerForUsePromise,
    initialState
  );

  useEffect(() => {
    promise = resolvePromise(promise);
    if (!promise) return;

    let canceled = false;
    dispatch({ type: 'pending' });

    promise.then(
      res =>
        !canceled &&
        dispatch({
          payload: res,
          type: 'resolved',
        }),
      err =>
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
