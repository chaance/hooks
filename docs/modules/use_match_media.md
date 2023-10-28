[@chance/hooks](../README.md) / [Exports](../modules.md) / use-match-media

# Module: use-match-media

## Table of contents

### Interfaces

- [QueryObject](../interfaces/use_match_media.QueryObject.md)
- [UseMatchMediaOptions](../interfaces/use_match_media.UseMatchMediaOptions.md)

### Functions

- [useMatchMedia](use_match_media.md#usematchmedia)

## Functions

### useMatchMedia

▸ **useMatchMedia**(`rawQuery`, `options?`): `boolean`

Returns whether or not a CSS media query matches.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawQuery` | `string` \| [`QueryObject`](../interfaces/use_match_media.QueryObject.md) \| [`QueryObject`](../interfaces/use_match_media.QueryObject.md)[] | A string, object or array of objects representing CSS media queries |
| `options?` | [`UseMatchMediaOptions`](../interfaces/use_match_media.UseMatchMediaOptions.md) |  |

#### Returns

`boolean`

#### Defined in

[use-match-media.ts:12](https://github.com/chaance/hooks/blob/99e93c4/src/use-match-media.ts#L12)

▸ **useMatchMedia**(`rawQuery`, `defaultState`, `options?`): `boolean`

Returns whether or not a CSS media query matches.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawQuery` | `string` \| [`QueryObject`](../interfaces/use_match_media.QueryObject.md) \| [`QueryObject`](../interfaces/use_match_media.QueryObject.md)[] | A string, object or array of objects representing CSS media queries |
| `defaultState` | `boolean` | The default state to return before the media query can be evaluated |
| `options?` | [`UseMatchMediaOptions`](../interfaces/use_match_media.UseMatchMediaOptions.md) |  |

#### Returns

`boolean`

#### Defined in

[use-match-media.ts:26](https://github.com/chaance/hooks/blob/99e93c4/src/use-match-media.ts#L26)
