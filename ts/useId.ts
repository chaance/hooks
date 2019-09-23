import { useEffect, useState } from 'react';

let _id = 0;
const genId = () => ++_id;

export const useId = (prefix?: string): string => {
  const [id, setId] = useState<string>(prefix ? `prefix-${_id}` : String(_id));
  useEffect(() => setId(prefix ? `prefix-${genId()}` : String(genId())), []);
  return id;
};
