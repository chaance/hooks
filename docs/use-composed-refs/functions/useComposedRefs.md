[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-composed-refs](../README.md) / useComposedRefs

# Function: useComposedRefs()

> **useComposedRefs**\<`RefValueType`\>(...`refs`): (`node`) => `void`

Passes or assigns a value to multiple refs (typically a DOM node). Useful for
dealing with components that need an explicit ref for DOM calculations but
also forwards refs assigned by an app.

## Type Parameters

• **RefValueType** = `unknown`

## Parameters

• ...**refs**: (`undefined` \| `null` \| [`AssignableRef`](../type-aliases/AssignableRef.md)\<`RefValueType`\>)[]

The refs to assign. These may be objects created with `useRef` or
`createRef`, or ref callback functions. It is important that callback refs
are memoized, just as they would be when assinging a ref to an element
directly.

## Returns

`Function`

A callback ref that will assign (or call with, in the case of
functions) the same value to all provided refs.

### Parameters

• **node**: `RefValueType`

### Returns

`void`

## Defined in

[use-composed-refs.ts:15](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-composed-refs.ts#L15)
