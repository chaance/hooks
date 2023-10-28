[@chance/hooks](../README.md) / [Exports](../modules.md) / use-effect-event

# Module: use-effect-event

## Table of contents

### Functions

- [useEffectEvent](use_effect_event.md#useeffectevent)

## Functions

### useEffectEvent

▸ **useEffectEvent**<`T`\>(`callback?`): `T`

Creates a stable callback function that has access to the latest state and
can be used within event handlers and effect callbacks. Throws when used in
the render phase. This is effectively a "polyfill" for the unreleased
`useEffectEvent`, currently only available in canary and experimental builds
of React.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | `T` |

#### Returns

`T`

**`See`**

https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event

#### Defined in

[use-effect-event.ts:12](https://github.com/chaance/hooks/blob/99e93c4/src/use-effect-event.ts#L12)
