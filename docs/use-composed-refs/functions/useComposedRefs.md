[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-composed-refs](../README.md) / useComposedRefs

# Function: useComposedRefs()

> **useComposedRefs**\<`RefValue`\>(...`refs`): `React.RefCallback`\<`RefValue`\>

Passes or assigns a value to multiple refs (typically a DOM node). Useful for
dealing with components that need an explicit ref for DOM calculations but
also forwards refs assigned by an app.

## Type Parameters

• **RefValue** = `unknown`

## Parameters

• ...**refs**: (`undefined` \| `Ref`\<`RefValue`\>)[]

The refs to assign. These may be objects created with `useRef` or
`createRef`, or ref callback functions. It is important that callback refs
are memoized, just as they would be when assinging a ref to an element
directly.

## Returns

`React.RefCallback`\<`RefValue`\>

A callback ref that will assign (or call with, in the case of
functions) the same value to all provided refs.

## Defined in

[src/use-composed-refs.ts:15](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-composed-refs.ts#L15)
