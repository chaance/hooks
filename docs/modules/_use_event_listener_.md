[@chancestrickland/hooks](../README.md) › [Globals](../globals.md) › ["use-event-listener"](_use_event_listener_.md)

# Module: "use-event-listener"

## Index

### Type aliases

* [EventMap](_use_event_listener_.md#eventmap)

### Variables

* [useEventListener](_use_event_listener_.md#const-useeventlistener)
* [useLayoutEventListener](_use_event_listener_.md#const-uselayouteventlistener)

### Functions

* [createUseEventListener](_use_event_listener_.md#createuseeventlistener)

## Type aliases

###  EventMap

Ƭ **EventMap**: *ElementEventMap & DocumentEventMap & WindowEventMap*

Defined in use-event-listener.ts:43

## Variables

### `Const` useEventListener

• **useEventListener**: *(Anonymous function)* = createUseEventListener(useEffect)

Defined in use-event-listener.ts:38

___

### `Const` useLayoutEventListener

• **useLayoutEventListener**: *(Anonymous function)* = createUseEventListener(useLayoutEffect)

Defined in use-event-listener.ts:39

## Functions

###  createUseEventListener

▸ **createUseEventListener**(`effect`: function): *(Anonymous function)*

Defined in use-event-listener.ts:3

**Parameters:**

▪ **effect**: *function*

▸ (`effect`: React.EffectCallback, `deps?`: React.DependencyList | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`effect` | React.EffectCallback |
`deps?` | React.DependencyList &#124; undefined |

**Returns:** *(Anonymous function)*
