[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-layout-effect](../README.md) / useLayoutEffect

# Function: useLayoutEffect()

> **useLayoutEffect**(`effect`, `deps`?): `void`

Same as React's `useLayoutEffect` but without the annoying hydration warning
when called on the server.

Yes, the warning is there for a reason and useful and blah blah blah, but
sometimes we know better than the computer.

See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect

## Parameters

• **effect**: `EffectCallback`

• **deps?**: `DependencyList`

## Returns

`void`

## Defined in

[use-layout-effect.ts:24](https://github.com/chaance/hooks/blob/0cacdc50fca9d664ac982d22f2ca80053abd43bf/src/use-layout-effect.ts#L24)
