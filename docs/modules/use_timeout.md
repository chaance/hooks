[@chance/hooks](../README.md) / [Exports](../modules.md) / use-timeout

# Module: use-timeout

## Table of contents

### Functions

- [useTimeout](use_timeout.md#usetimeout)

## Functions

### useTimeout

▸ **useTimeout**(`callback`, `delay?`): `void`

Sets a timer which executes a function or specified piece of code once the
timer expires.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | A function to be executed after the timer expires |
| `delay?` | ``null`` \| `number` | The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute in the next event cycle. |

#### Returns

`void`

#### Defined in

[src/use-timeout.ts:14](https://github.com/chaance/hooks/blob/2f16b01/src/use-timeout.ts#L14)
