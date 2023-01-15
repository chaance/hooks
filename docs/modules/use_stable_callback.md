[@chance/hooks](../README.md) / [Exports](../modules.md) / use-stable-callback

# Module: use-stable-callback

## Table of contents

### Functions

- [useStableCallback](use_stable_callback.md#usestablecallback)

## Functions

### useStableCallback

▸ **useStableCallback**<`T`\>(`callback`, `effectHook?`): `T`

A callback that is refreshed on every render in a ref for stable identity in
effects and memoized objects. Returns a memoized callback with a stable
identity across renders.

It is important to note that in some cases the value can become stale
depending on the order in which some hooks are called. It is not recommended
to use this hook with too much indirection to prevent unexpected behavior.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `T` | The callback to be saved |
| `effectHook?` | (`effect`: `EffectCallback`, `deps?`: `DependencyList`) => `void` | Accepts a function that contains imperative, possibly effectful code. **`Version`** 16.8.0 **`See`** https://reactjs.org/docs/hooks-reference.html#useeffect |

#### Returns

`T`

#### Defined in

[src/use-stable-callback.ts:17](https://github.com/chaance/hooks/blob/2f16b01/src/use-stable-callback.ts#L17)
