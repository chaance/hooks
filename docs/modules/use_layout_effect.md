[@chance/hooks](../README.md) / [Exports](../modules.md) / use-layout-effect

# Module: use-layout-effect

## Table of contents

### Functions

- [useLayoutEffect](use_layout_effect.md#uselayouteffect)

## Functions

### useLayoutEffect

▸ **useLayoutEffect**(`effect`, `deps?`): `void`

Same as React's `useLayoutEffect` but without the annoying hydration warning
when called on the server.

Yes, the warning is there for a reason and useful and blah blah blah, but
sometimes we know better than the computer.

See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `EffectCallback` |
| `deps?` | `DependencyList` |

#### Returns

`void`

#### Defined in

[use-layout-effect.ts:24](https://github.com/chaance/hooks/blob/99e93c4/src/use-layout-effect.ts#L24)
