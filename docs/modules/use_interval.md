[@chance/hooks](../README.md) / [Exports](../modules.md) / use-interval

# Module: use-interval

## Table of contents

### Functions

- [useInterval](use_interval.md#useinterval)

## Functions

### useInterval

▸ **useInterval**(`callback`, `interval?`): `void`

Repeatedly executes a function at a set interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | A function to be executed at each interval |
| `interval?` | ``null`` \| `number` | The interval in milliseconds. If this parameter is `null` or `undefined` the timer will be canceled. |

#### Returns

`void`

#### Defined in

[src/use-interval.ts:10](https://github.com/chaance/hooks/blob/54553af/src/use-interval.ts#L10)
