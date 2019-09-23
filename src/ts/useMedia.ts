import { useLayoutEffect, useState } from 'react';
import json2mq from 'json2mq';

export const useMedia = (rawQuery: any, defaultState: boolean = false) => {
  const [state, setState] = useState<boolean>(defaultState);
  const query = json2mq(rawQuery);

  if (typeof window !== 'object') return defaultState;

  useLayoutEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) return;
      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
};
