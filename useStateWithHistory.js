// Courtesy of Michael Jackson: https://gist.github.com/mjackson/629bb1645423591fbc21145d6e4a1f21

import { useRef, useState } from 'react';

export function useStateWithHistory(defaultValue) {
  const history = useRef([defaultValue]);
  const [index, setIndex] = useState(0);

  function undo() {
    setIndex(index > 0 ? index - 1 : index);
  }
  function redo() {
    setIndex(index < history.current.length - 1 ? index + 1 : index);
  }
  function setValue(newValue) {
    history.current.push(newValue);
    setIndex(index + 1);
  }

  return [history.current[index], setValue, undo, redo];
}
