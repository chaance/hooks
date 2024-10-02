[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-match-media](../README.md) / useMatchMedia

# Function: useMatchMedia()

## useMatchMedia(rawQuery, options)

> **useMatchMedia**(`rawQuery`, `options`?): `boolean`

Returns whether or not a CSS media query matches.

### Parameters

• **rawQuery**: `string` \| [`QueryObject`](../interfaces/QueryObject.md) \| [`QueryObject`](../interfaces/QueryObject.md)[]

A string, object or array of objects representing CSS media
                queries

• **options?**: [`UseMatchMediaOptions`](../interfaces/UseMatchMediaOptions.md)

### Returns

`boolean`

### Defined in

[use-match-media.ts:12](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-match-media.ts#L12)

## useMatchMedia(rawQuery, defaultState, options)

> **useMatchMedia**(`rawQuery`, `defaultState`, `options`?): `boolean`

Returns whether or not a CSS media query matches.

### Parameters

• **rawQuery**: `string` \| [`QueryObject`](../interfaces/QueryObject.md) \| [`QueryObject`](../interfaces/QueryObject.md)[]

A string, object or array of objects representing CSS media
                queries

• **defaultState**: `boolean`

The default state to return before the media query can be
                    evaluated

• **options?**: [`UseMatchMediaOptions`](../interfaces/UseMatchMediaOptions.md)

### Returns

`boolean`

### Defined in

[use-match-media.ts:26](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-match-media.ts#L26)
