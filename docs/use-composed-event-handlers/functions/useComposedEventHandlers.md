[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-composed-event-handlers](../README.md) / useComposedEventHandlers

# Function: useComposedEventHandlers()

> **useComposedEventHandlers**\<`T`\>(...`handlers`): (`event`) => `void`

Composes multiple event handlers into a single function. Any handler can call
`event.preventDefault()` to stop subsequent handlers from being called.

## Type Parameters

• **T** *extends* `object`

## Parameters

• ...**handlers**: (`undefined` \| `null` \| (`event`) => `void`)[]

The event handlers to compose. It is generally a good idea to
memoize the handlers, particularly if they are passed into a child component,
used in an effect or provided to React context, as the returned function will
otherwise be recreated on every render.

## Returns

`Function`

A function that will call each handler in the order it was provided.
If any handler calls `event.preventDefault()`, the subsequent handlers will
not be called.

### Parameters

• **event**: `T`

### Returns

`void`

## Defined in

[src/use-composed-event-handlers.ts:16](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-composed-event-handlers.ts#L16)
