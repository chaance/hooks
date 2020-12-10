import * as React from 'react';

export function useStateWithHistory<ValueType>(defaultValue: ValueType) {
  const history = React.useRef([defaultValue]);
  const [index, setIndex] = React.useState(0);

  const undo = React.useCallback(function undo() {
    setIndex((i) => (i > 0 ? i - 1 : i));
  }, []);

  const redo = React.useCallback(function redo() {
    setIndex((i) => (i < history.current.length - 1 ? i + 1 : i));
  }, []);

  const setValue = React.useCallback(function setValue(newValue: ValueType) {
    history.current.push(newValue);
    setIndex((i) => i + 1);
  }, []);

  return [history.current[index], setValue, undo, redo];
}

export default useStateWithHistory;
