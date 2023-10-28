[@chance/hooks](../README.md) / [Exports](../modules.md) / [use-match-media](../modules/use_match_media.md) / UseMatchMediaOptions

# Interface: UseMatchMediaOptions

[use-match-media](../modules/use_match_media.md).UseMatchMediaOptions

## Table of contents

### Properties

- [effectHook](use_match_media.UseMatchMediaOptions.md#effecthook)

## Properties

### effectHook

• `Optional` **effectHook**: (`effect`: `EffectCallback`, `deps?`: `DependencyList`) => `void`

#### Type declaration

▸ (`effect`, `deps?`): `void`

Add the listener in either `useEffect` or `useLayoutEffect`. Defaults to
`useEffect`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `EffectCallback` |
| `deps?` | `DependencyList` |

##### Returns

`void`

#### Defined in

[use-match-media.ts:76](https://github.com/chaance/hooks/blob/99e93c4/src/use-match-media.ts#L76)
