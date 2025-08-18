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

## Version

16.8.0

## See

[https://react.dev/reference/react/useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)

## Defined in

[src/use-layout-effect.ts:13](https://github.com/chaance/hooks/blob/7d20cff8743741a411549973aea6ff2c66f90d38/src/use-layout-effect.ts#L13)
