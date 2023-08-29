[@chance/hooks](../README.md) / [Exports](../modules.md) / [use-event-listener](../modules/use_event_listener.md) / UseEventListenerOptions

# Interface: UseEventListenerOptions

[use-event-listener](../modules/use_event_listener.md).UseEventListenerOptions

## Table of contents

### Properties

- [capture](use_event_listener.UseEventListenerOptions.md#capture)
- [effectHook](use_event_listener.UseEventListenerOptions.md#effecthook)
- [once](use_event_listener.UseEventListenerOptions.md#once)
- [passive](use_event_listener.UseEventListenerOptions.md#passive)
- [signal](use_event_listener.UseEventListenerOptions.md#signal)

## Properties

### capture

• `Optional` **capture**: `boolean`

A boolean value indicating that events of this type will be dispatched to
the registered `listener` before being dispatched to any `EventTarget`
beneath it in the DOM tree. If not specified, defaults to `false`.

#### Defined in

[src/use-event-listener.ts:111](https://github.com/chaance/hooks/blob/54553af/src/use-event-listener.ts#L111)

___

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

[src/use-event-listener.ts:135](https://github.com/chaance/hooks/blob/54553af/src/use-event-listener.ts#L135)

___

### once

• `Optional` **once**: `boolean`

A boolean value indicating that the `listener` should be invoked at most
once after being added. If `true`, the `listener` would be automatically
removed when invoked. If not specified, defaults to `false`.

#### Defined in

[src/use-event-listener.ts:117](https://github.com/chaance/hooks/blob/54553af/src/use-event-listener.ts#L117)

___

### passive

• `Optional` **passive**: `boolean`

A boolean value that, if `true`, indicates that the function specified by
`listener` will never call `preventDefault()`. If a passive listener does
call `preventDefault()`, the user agent will do nothing other than generate
a console warning. If not specified, defaults to `false`.

#### Defined in

[src/use-event-listener.ts:124](https://github.com/chaance/hooks/blob/54553af/src/use-event-listener.ts#L124)

___

### signal

• `Optional` **signal**: `AbortSignal`

An `AbortSignal`. The `listener` will be removed when the given `AbortSignal`
object's `abort()` method is called. If not specified, no `AbortSignal` is
associated with the `listener`.

#### Defined in

[src/use-event-listener.ts:130](https://github.com/chaance/hooks/blob/54553af/src/use-event-listener.ts#L130)
