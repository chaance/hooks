[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-timeout](../README.md) / useTimeout

# Function: useTimeout()

> **useTimeout**(`callback`, `delay`?): `void`

Sets a timer which executes a function or specified piece of code once the
timer expires.

## Parameters

• **callback**

A function to be executed after the timer expires

• **delay?**: `null` \| `number`

The time, in milliseconds, that the timer should wait before the
             specified function or code is executed. If this parameter is
             `null` or `undefined` the timeout will be canceled.

## Returns

`void`

## Defined in

[use-timeout.ts:12](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-timeout.ts#L12)
