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

[src/use-match-media.ts:39](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-match-media.ts#L39)
