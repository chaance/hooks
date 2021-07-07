[@chance/hooks](../README.md) / [Exports](../modules.md) / use-match-media

# Module: use-match-media

## Table of contents

### Type aliases

- [QueryObject](use_match_media.md#queryobject)

### Functions

- [createUseMatchMedia](use_match_media.md#createusematchmedia)
- [useMatchMedia](use_match_media.md#usematchmedia)
- [useMatchMediaLayoutEffect](use_match_media.md#usematchmedialayouteffect)

## Type aliases

### QueryObject

Ƭ **QueryObject**: `Object`

#### Index signature

▪ [property: `string`]: `string` \| `number` \| `boolean`

#### Defined in

[use-match-media.ts:39](https://github.com/chaance/hooks/blob/e2a7532/src/use-match-media.ts#L39)

## Functions

### createUseMatchMedia

▸ **createUseMatchMedia**(`effect`): (`rawQuery`: [`QueryObject`](use_match_media.md#queryobject) \| [`QueryObject`](use_match_media.md#queryobject)[], `defaultState`: `boolean`) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | typeof `React.useEffect` |

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

[use-match-media.ts:4](https://github.com/chaance/hooks/blob/e2a7532/src/use-match-media.ts#L4)

___

### useMatchMedia

▸ `Const` **useMatchMedia**(`rawQuery`, `defaultState?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rawQuery` | [`QueryObject`](use_match_media.md#queryobject) \| [`QueryObject`](use_match_media.md#queryobject)[] | `undefined` |
| `defaultState` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[use-match-media.ts:34](https://github.com/chaance/hooks/blob/e2a7532/src/use-match-media.ts#L34)

___

### useMatchMediaLayoutEffect

▸ `Const` **useMatchMediaLayoutEffect**(`rawQuery`, `defaultState?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rawQuery` | [`QueryObject`](use_match_media.md#queryobject) \| [`QueryObject`](use_match_media.md#queryobject)[] | `undefined` |
| `defaultState` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[use-match-media.ts:35](https://github.com/chaance/hooks/blob/e2a7532/src/use-match-media.ts#L35)
