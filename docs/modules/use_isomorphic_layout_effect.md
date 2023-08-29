[@chance/hooks](../README.md) / [Exports](../modules.md) / use-isomorphic-layout-effect

# Module: use-isomorphic-layout-effect

## Table of contents

### References

- [useLayoutEffect](use_isomorphic_layout_effect.md#uselayouteffect)

### Functions

- [useIsomorphicLayoutEffect](use_isomorphic_layout_effect.md#useisomorphiclayouteffect)

## References

### useLayoutEffect

Renames and re-exports [useIsomorphicLayoutEffect](use_isomorphic_layout_effect.md#useisomorphiclayouteffect)

## Functions

### useIsomorphicLayoutEffect

▸ **useIsomorphicLayoutEffect**(`effect`, `deps?`): `void`

`useLayoutEffect` but without the annoying hydration warning when called on
the server.

See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `EffectCallback` |
| `deps?` | `DependencyList` |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/@types+react@18.2.21/node_modules/@types/react/index.d.ts:1092
