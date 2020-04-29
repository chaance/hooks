/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useLayoutEffect, useState } from 'react';
import json2mq from 'json2mq';

function createUseMedia(
  effect: (
    effect: React.EffectCallback,
    deps?: React.DependencyList | undefined
  ) => void
) {
  return function (
    rawQuery: QueryObject | QueryObject[],
    defaultState = false
  ) {
    let [state, setState] = useState(defaultState);
    let query = json2mq(rawQuery);

    effect(() => {
      let mounted = true;
      let mql = window.matchMedia(query);
      mql.addListener(handleChange);
      setState(mql.matches);

      function handleChange() {
        if (!mounted) return;
        setState(mql.matches);
      }

      return () => {
        mounted = false;
        mql.removeListener(handleChange);
      };
    }, [query]);

    return state;
  };
}

export const useMedia = createUseMedia(useEffect);
export const useLayoutMedia = createUseMedia(useLayoutEffect);
export default useMedia;

export type QueryObject = {
  [property: string]: string | number | boolean;
};
