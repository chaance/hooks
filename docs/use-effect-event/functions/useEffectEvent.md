[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-effect-event](../README.md) / useEffectEvent

# Function: useEffectEvent()

> **useEffectEvent**\<`T`\>(`callback`?): `T`

Creates a stable callback function that has access to the latest state and
can be used within event handlers and effect callbacks. Throws when used in
the render phase. This is effectively a "polyfill" for the unreleased
`useEffectEvent`, currently only available in canary and experimental builds
of React.

## Type Parameters

• **T** *extends* (...`args`) => `any`

## Parameters

• **callback?**: `T`

## Returns

`T`

## See

https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event

## Defined in

[use-effect-event.ts:12](https://github.com/chaance/hooks/blob/0cacdc50fca9d664ac982d22f2ca80053abd43bf/src/use-effect-event.ts#L12)
