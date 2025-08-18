[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-state-with-history](../README.md) / useStateWithHistory

# Function: useStateWithHistory()

> **useStateWithHistory**\<`ValueType`\>(`initialValue`, `opts`): [`HistoryState`](../type-aliases/HistoryState.md)\<`ValueType`\>

Returns a stateful value, a function to update it, and `undo`/`redo`
functions to navigate through the state's history.

## Type Parameters

• **ValueType**

## Parameters

• **initialValue**: `ValueType` \| () => `ValueType`

The initial state value or a function to initialize it

• **opts**: [`UseStateWithHistoryOptions`](../interfaces/UseStateWithHistoryOptions.md) = `{}`

Optional options object

## Returns

[`HistoryState`](../type-aliases/HistoryState.md)\<`ValueType`\>

## Defined in

[src/use-state-with-history.ts:14](https://github.com/chaance/hooks/blob/7d20cff8743741a411549973aea6ff2c66f90d38/src/use-state-with-history.ts#L14)
