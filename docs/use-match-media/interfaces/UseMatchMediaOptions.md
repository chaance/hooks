[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-match-media](../README.md) / UseMatchMediaOptions

# Interface: UseMatchMediaOptions

## Properties

### effectHook()?

> `optional` **effectHook**: (`effect`, `deps`?) => `void`

Add the listener in either `useEffect` or `useLayoutEffect`. Defaults to
`useEffect`.

#### Parameters

• **effect**: `EffectCallback`

• **deps?**: `DependencyList`

#### Returns

`void`

#### Defined in

[src/use-match-media.ts:39](https://github.com/chaance/hooks/blob/7d20cff8743741a411549973aea6ff2c66f90d38/src/use-match-media.ts#L39)
