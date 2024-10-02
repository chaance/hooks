[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-event-listener](../README.md) / UseEventListenerOptions

# Interface: UseEventListenerOptions

An object that specifies characteristics about an event listener.

## See

[MDN: `addEventListener` options](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#options).

## Properties

### capture?

> `optional` **capture**: `boolean`

A boolean value indicating that events of this type will be dispatched to
the registered `listener` before being dispatched to any `EventTarget`
beneath it in the DOM tree. If not specified, defaults to `false`.

#### Defined in

[use-event-listener.ts:190](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L190)

***

### once?

> `optional` **once**: `boolean`

A boolean value indicating that the `listener` should be invoked at most
once after being added. If `true`, the `listener` would be automatically
removed when invoked. If not specified, defaults to `false`.

#### Defined in

[use-event-listener.ts:196](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L196)

***

### passive?

> `optional` **passive**: `boolean`

A boolean value that, if `true`, indicates that the function specified by
`listener` will never call `preventDefault()`. If a passive listener does
call `preventDefault()`, the user agent will do nothing other than generate
a console warning. If not specified, defaults to `false`.

#### Defined in

[use-event-listener.ts:203](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L203)

***

### signal?

> `optional` **signal**: `AbortSignal`

An `AbortSignal`. The `listener` will be removed when the given
`AbortSignal` object's `abort()` method is called. If not specified, no
`AbortSignal` is associated with the `listener`.

#### Defined in

[use-event-listener.ts:209](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L209)

***

### skip?

> `optional` **skip**: `boolean`

A boolean value indicating whether or not the event listener should not be
attached under certain conditions.

#### Defined in

[use-event-listener.ts:214](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L214)
