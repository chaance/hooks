[@chance/hooks](../README.md) / [Exports](../modules.md) / use-stable-callback

# Module: use-stable-callback

## Table of contents

### Functions

- [useStableCallback](use_stable_callback.md#usestablecallback)

## Functions

### useStableCallback

▸ **useStableCallback**<`T`\>(`callback`, `useEffect?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `callback` | `T` | `undefined` |
| `useEffect` | (`effect`: `EffectCallback`, `deps?`: `DependencyList`) => `void` | `useLayoutEffect` |

#### Returns

`T`

#### Defined in

[src/use-stable-callback.ts:4](https://github.com/chaance/hooks/blob/8221fb1/src/use-stable-callback.ts#L4)
