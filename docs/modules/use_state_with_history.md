[@chance/hooks](../README.md) / [Exports](../modules.md) / use-state-with-history

# Module: use-state-with-history

## Table of contents

### Interfaces

- [UseStateWithHistoryOptions](../interfaces/use_state_with_history.UseStateWithHistoryOptions.md)

### Type Aliases

- [HistoryState](use_state_with_history.md#historystate)

### Functions

- [useStateWithHistory](use_state_with_history.md#usestatewithhistory)

## Type Aliases

### HistoryState

Ƭ **HistoryState**<`ValueType`\>: [State: ValueType, Setter: React.Dispatch<React.SetStateAction<ValueType\>\>, UndoFunction: Function, RedoFunction: Function]

#### Type parameters

| Name |
| :------ |
| `ValueType` |

#### Defined in

[src/use-state-with-history.ts:126](https://github.com/chaance/hooks/blob/54553af/src/use-state-with-history.ts#L126)

## Functions

### useStateWithHistory

▸ **useStateWithHistory**<`ValueType`\>(`initialValue`, `opts?`): [`HistoryState`](use_state_with_history.md#historystate)<`ValueType`\>

Returns a stateful value, a function to update it, and `undo`/`redo`
functions to navigate through the state's history.

#### Type parameters

| Name |
| :------ |
| `ValueType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialValue` | `ValueType` \| () => `ValueType` | The initial state value or a function to initialize it |
| `opts` | [`UseStateWithHistoryOptions`](../interfaces/use_state_with_history.UseStateWithHistoryOptions.md) | Optional options object |

#### Returns

[`HistoryState`](use_state_with_history.md#historystate)<`ValueType`\>

#### Defined in

[src/use-state-with-history.ts:14](https://github.com/chaance/hooks/blob/54553af/src/use-state-with-history.ts#L14)
