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

[src/use-state-with-history.ts:110](https://github.com/chaance/hooks/blob/8221fb1/src/use-state-with-history.ts#L110)

## Functions

### useStateWithHistory

▸ **useStateWithHistory**<`ValueType`\>(`defaultValue`, `opts?`): [`HistoryState`](use_state_with_history.md#historystate)<`ValueType`\>

#### Type parameters

| Name |
| :------ |
| `ValueType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | `ValueType` \| () => `ValueType` |
| `opts` | [`UseStateWithHistoryOptions`](../interfaces/use_state_with_history.UseStateWithHistoryOptions.md) |

#### Returns

[`HistoryState`](use_state_with_history.md#historystate)<`ValueType`\>

#### Defined in

[src/use-state-with-history.ts:7](https://github.com/chaance/hooks/blob/8221fb1/src/use-state-with-history.ts#L7)
