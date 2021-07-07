[@chance/hooks](../README.md) / [Exports](../modules.md) / use-update-effect

# Module: use-update-effect

## Table of contents

### Functions

- [createUseUpdateEffect](use_update_effect.md#createuseupdateeffect)
- [useUpdateEffect](use_update_effect.md#useupdateeffect)
- [useUpdateLayoutEffect](use_update_effect.md#useupdatelayouteffect)

## Functions

### createUseUpdateEffect

▸ **createUseUpdateEffect**(`effect`): (`effectCallback`: `EffectCallback`, `deps?`: `DependencyList`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | typeof `React.useEffect` |

#### Returns

`fn`

▸ (`effectCallback`, `deps?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `effectCallback` | `EffectCallback` |
| `deps?` | `DependencyList` |

##### Returns

`void`

#### Defined in

[use-update-effect.ts:3](https://github.com/chaance/hooks/blob/e2a7532/src/use-update-effect.ts#L3)

___

### useUpdateEffect

▸ `Const` **useUpdateEffect**(`effectCallback`, `deps?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `effectCallback` | `EffectCallback` |
| `deps?` | `DependencyList` |

#### Returns

`void`

#### Defined in

[use-update-effect.ts:20](https://github.com/chaance/hooks/blob/e2a7532/src/use-update-effect.ts#L20)

___

### useUpdateLayoutEffect

▸ `Const` **useUpdateLayoutEffect**(`effectCallback`, `deps?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `effectCallback` | `EffectCallback` |
| `deps?` | `DependencyList` |

#### Returns

`void`

#### Defined in

[use-update-effect.ts:21](https://github.com/chaance/hooks/blob/e2a7532/src/use-update-effect.ts#L21)
