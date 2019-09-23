import { useEffect, useState } from 'react';

let _id = 0;
const genId = () => ++_id;

export function useId(prefix) {
  const [id, setId] = useState(prefix ? `prefix-${_id}` : String(_id));
  useEffect(() => setId(prefix ? `prefix-${genId()}` : String(genId())), []);
  return id;
}
