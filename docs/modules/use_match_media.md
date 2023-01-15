[@chance/hooks](../README.md) / [Exports](../modules.md) / use-match-media

# Module: use-match-media

## Table of contents

### Type Aliases

- [QueryObject](use_match_media.md#queryobject)

### Functions

- [createUseMatchMedia](use_match_media.md#createusematchmedia)
- [useMatchMedia](use_match_media.md#usematchmedia)
- [useMatchMediaLayoutEffect](use_match_media.md#usematchmedialayouteffect)

## Type Aliases

### QueryObject

Ƭ **QueryObject**: `Object`

#### Index signature

▪ [property: `string`]: `string` \| `number` \| `boolean`

#### Defined in

[src/use-match-media.ts:38](https://github.com/chaance/hooks/blob/8221fb1/src/use-match-media.ts#L38)

## Functions

### createUseMatchMedia

▸ **createUseMatchMedia**(`useEffect`): (`rawQuery`: [`QueryObject`](use_match_media.md#queryobject) \| [`QueryObject`](use_match_media.md#queryobject)[], `defaultState`: `boolean`) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `useEffect` | (`effect`: `EffectCallback`, `deps?`: `DependencyList`) => `void` |

#### Returns

`fn`

▸ (`rawQuery`, `defaultState?`): `boolean`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rawQuery` | [`QueryObject`](use_match_media.md#queryobject) \| [`QueryObject`](use_match_media.md#queryobject)[] | `undefined` |
| `defaultState` | `boolean` | `false` |

##### Returns

`boolean`

#### Defined in

[src/use-match-media.ts:5](https://github.com/chaance/hooks/blob/8221fb1/src/use-match-media.ts#L5)

___

### useMatchMedia

▸ **useMatchMedia**(`rawQuery`, `defaultState?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rawQuery` | [`QueryObject`](use_match_media.md#queryobject) \| [`QueryObject`](use_match_media.md#queryobject)[] | `undefined` |
| `defaultState` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[src/use-match-media.ts:6](https://github.com/chaance/hooks/blob/8221fb1/src/use-match-media.ts#L6)

___

### useMatchMediaLayoutEffect

▸ **useMatchMediaLayoutEffect**(`rawQuery`, `defaultState?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rawQuery` | [`QueryObject`](use_match_media.md#queryobject) \| [`QueryObject`](use_match_media.md#queryobject)[] | `undefined` |
| `defaultState` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[src/use-match-media.ts:6](https://github.com/chaance/hooks/blob/8221fb1/src/use-match-media.ts#L6)
