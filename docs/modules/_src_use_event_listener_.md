**[@chance/hooks](../README.md)**

> [Globals](../globals.md) / "src/use-event-listener"

# Module: "src/use-event-listener"

## Index

### Type aliases

* [EventMap](_src_use_event_listener_.md#eventmap)

### Variables

* [useEventListener](_src_use_event_listener_.md#useeventlistener)
* [useEventListenerLayoutEffect](_src_use_event_listener_.md#useeventlistenerlayouteffect)
* [useLayoutEventListener](_src_use_event_listener_.md#uselayouteventlistener)

### Functions

* [createUseEventListener](_src_use_event_listener_.md#createuseeventlistener)

## Type aliases

### EventMap

Ƭ  **EventMap**: ElementEventMap & DocumentEventMap & WindowEventMap

*Defined in [src/use-event-listener.ts:41](https://github.com/chaance/hooks/blob/8a20513/src/use-event-listener.ts#L41)*

## Variables

### useEventListener

• `Const` **useEventListener**: (Anonymous function) = createUseEventListener(React.useEffect)

*Defined in [src/use-event-listener.ts:31](https://github.com/chaance/hooks/blob/8a20513/src/use-event-listener.ts#L31)*

___

### useEventListenerLayoutEffect

• `Const` **useEventListenerLayoutEffect**: (Anonymous function) = createUseEventListener( React.useLayoutEffect)

*Defined in [src/use-event-listener.ts:32](https://github.com/chaance/hooks/blob/8a20513/src/use-event-listener.ts#L32)*

___

### useLayoutEventListener

• `Const` **useLayoutEventListener**: (Anonymous function) = useEventListenerLayoutEffect

*Defined in [src/use-event-listener.ts:40](https://github.com/chaance/hooks/blob/8a20513/src/use-event-listener.ts#L40)*

**`alias`** useEventListenerLayoutEffect

**`deprecated`** 

## Functions

### createUseEventListener

▸ **createUseEventListener**(`effect`: *typeof* useEffect): (Anonymous function)

*Defined in [src/use-event-listener.ts:4](https://github.com/chaance/hooks/blob/8a20513/src/use-event-listener.ts#L4)*

#### Parameters:

Name | Type |
------ | ------ |
`effect` | *typeof* useEffect |

**Returns:** (Anonymous function)
