[@chance/hooks](../README.md) / [Exports](../modules.md) / use-event-listener

# Module: use-event-listener

## Table of contents

### Interfaces

- [UseEventListenerOptions](../interfaces/use_event_listener.UseEventListenerOptions.md)

### Type Aliases

- [EventMap](use_event_listener.md#eventmap)

### Functions

- [useEventListener](use_event_listener.md#useeventlistener)

## Type Aliases

### EventMap

Ƭ **EventMap**: `ElementEventMap` & `DocumentEventMap` & `WindowEventMap`

#### Defined in

[use-event-listener.ts:103](https://github.com/chaance/hooks/blob/99e93c4/src/use-event-listener.ts#L103)

## Functions

### useEventListener

▸ **useEventListener**<`ListenerType`\>(`type`, `listener`, `options?`): `void`

A React hook that attaches an event listener to the global window. The
listener is attached in an effect hook and torn down in its cleanup phase.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ListenerType` | extends ``"load"`` \| ``"fullscreenchange"`` \| ``"fullscreenerror"`` \| ``"DOMContentLoaded"`` \| ``"pointerlockchange"`` \| ``"pointerlockerror"`` \| ``"readystatechange"`` \| ``"visibilitychange"`` \| ``"abort"`` \| ``"animationcancel"`` \| ``"animationend"`` \| ``"animationiteration"`` \| ``"animationstart"`` \| ``"auxclick"`` \| ``"beforeinput"`` \| ``"blur"`` \| ``"cancel"`` \| ``"canplay"`` \| ``"canplaythrough"`` \| ``"change"`` \| ``"click"`` \| ``"close"`` \| ``"compositionend"`` \| ``"compositionstart"`` \| ``"compositionupdate"`` \| ``"contextmenu"`` \| ``"copy"`` \| ``"cuechange"`` \| ``"cut"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragenter"`` \| ``"dragleave"`` \| ``"dragover"`` \| ``"dragstart"`` \| ``"drop"`` \| ``"durationchange"`` \| ``"emptied"`` \| ``"ended"`` \| ``"error"`` \| ``"focus"`` \| ``"focusin"`` \| ``"focusout"`` \| ``"formdata"`` \| ``"gotpointercapture"`` \| ``"input"`` \| ``"invalid"`` \| ``"keydown"`` \| ``"keypress"`` \| ``"keyup"`` \| ``"loadeddata"`` \| ``"loadedmetadata"`` \| ``"loadstart"`` \| ``"lostpointercapture"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"`` \| ``"paste"`` \| ``"pause"`` \| ``"play"`` \| ``"playing"`` \| ``"pointercancel"`` \| ``"pointerdown"`` \| ``"pointerenter"`` \| ``"pointerleave"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"progress"`` \| ``"ratechange"`` \| ``"reset"`` \| ``"resize"`` \| ``"scroll"`` \| ``"scrollend"`` \| ``"securitypolicyviolation"`` \| ``"seeked"`` \| ``"seeking"`` \| ``"select"`` \| ``"selectionchange"`` \| ``"selectstart"`` \| ``"slotchange"`` \| ``"stalled"`` \| ``"submit"`` \| ``"suspend"`` \| ``"timeupdate"`` \| ``"toggle"`` \| ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"`` \| ``"transitioncancel"`` \| ``"transitionend"`` \| ``"transitionrun"`` \| ``"transitionstart"`` \| ``"volumechange"`` \| ``"waiting"`` \| ``"webkitanimationend"`` \| ``"webkitanimationiteration"`` \| ``"webkitanimationstart"`` \| ``"webkittransitionend"`` \| ``"wheel"`` \| ``"devicemotion"`` \| ``"deviceorientation"`` \| ``"gamepadconnected"`` \| ``"gamepaddisconnected"`` \| ``"orientationchange"`` \| ``"afterprint"`` \| ``"beforeprint"`` \| ``"beforeunload"`` \| ``"hashchange"`` \| ``"languagechange"`` \| ``"message"`` \| ``"messageerror"`` \| ``"offline"`` \| ``"online"`` \| ``"pagehide"`` \| ``"pageshow"`` \| ``"popstate"`` \| ``"rejectionhandled"`` \| ``"storage"`` \| ``"unhandledrejection"`` \| ``"unload"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `ListenerType` | A case-sensitive string representing the [event type](https://developer.mozilla.org/en-US/docs/Web/Events) to listen for |
| `listener` | (`event`: [`EventMap`](use_event_listener.md#eventmap)[`ListenerType`]) => `void` | The event listener callback that fires in response to the event being dispatched |
| `options?` | [`UseEventListenerOptions`](../interfaces/use_event_listener.UseEventListenerOptions.md) | An options object that specifies characteristics about the event listener |

#### Returns

`void`

#### Defined in

[use-event-listener.ts:15](https://github.com/chaance/hooks/blob/99e93c4/src/use-event-listener.ts#L15)

▸ **useEventListener**<`ElementType`, `ListenerType`\>(`elementRef`, `type`, `listener`, `options?`): `void`

A React hook that attaches an event listener to an element stored in a ref.
The listener is attached in an effect hook and torn down in its cleanup
phase.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementType` | extends `Window` & typeof `globalThis` \| `Document` \| `Element` |
| `ListenerType` | extends ``"load"`` \| ``"fullscreenchange"`` \| ``"fullscreenerror"`` \| ``"DOMContentLoaded"`` \| ``"pointerlockchange"`` \| ``"pointerlockerror"`` \| ``"readystatechange"`` \| ``"visibilitychange"`` \| ``"abort"`` \| ``"animationcancel"`` \| ``"animationend"`` \| ``"animationiteration"`` \| ``"animationstart"`` \| ``"auxclick"`` \| ``"beforeinput"`` \| ``"blur"`` \| ``"cancel"`` \| ``"canplay"`` \| ``"canplaythrough"`` \| ``"change"`` \| ``"click"`` \| ``"close"`` \| ``"compositionend"`` \| ``"compositionstart"`` \| ``"compositionupdate"`` \| ``"contextmenu"`` \| ``"copy"`` \| ``"cuechange"`` \| ``"cut"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragenter"`` \| ``"dragleave"`` \| ``"dragover"`` \| ``"dragstart"`` \| ``"drop"`` \| ``"durationchange"`` \| ``"emptied"`` \| ``"ended"`` \| ``"error"`` \| ``"focus"`` \| ``"focusin"`` \| ``"focusout"`` \| ``"formdata"`` \| ``"gotpointercapture"`` \| ``"input"`` \| ``"invalid"`` \| ``"keydown"`` \| ``"keypress"`` \| ``"keyup"`` \| ``"loadeddata"`` \| ``"loadedmetadata"`` \| ``"loadstart"`` \| ``"lostpointercapture"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"`` \| ``"paste"`` \| ``"pause"`` \| ``"play"`` \| ``"playing"`` \| ``"pointercancel"`` \| ``"pointerdown"`` \| ``"pointerenter"`` \| ``"pointerleave"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"progress"`` \| ``"ratechange"`` \| ``"reset"`` \| ``"resize"`` \| ``"scroll"`` \| ``"scrollend"`` \| ``"securitypolicyviolation"`` \| ``"seeked"`` \| ``"seeking"`` \| ``"select"`` \| ``"selectionchange"`` \| ``"selectstart"`` \| ``"slotchange"`` \| ``"stalled"`` \| ``"submit"`` \| ``"suspend"`` \| ``"timeupdate"`` \| ``"toggle"`` \| ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"`` \| ``"transitioncancel"`` \| ``"transitionend"`` \| ``"transitionrun"`` \| ``"transitionstart"`` \| ``"volumechange"`` \| ``"waiting"`` \| ``"webkitanimationend"`` \| ``"webkitanimationiteration"`` \| ``"webkitanimationstart"`` \| ``"webkittransitionend"`` \| ``"wheel"`` \| ``"devicemotion"`` \| ``"deviceorientation"`` \| ``"gamepadconnected"`` \| ``"gamepaddisconnected"`` \| ``"orientationchange"`` \| ``"afterprint"`` \| ``"beforeprint"`` \| ``"beforeunload"`` \| ``"hashchange"`` \| ``"languagechange"`` \| ``"message"`` \| ``"messageerror"`` \| ``"offline"`` \| ``"online"`` \| ``"pagehide"`` \| ``"pageshow"`` \| ``"popstate"`` \| ``"rejectionhandled"`` \| ``"storage"`` \| ``"unhandledrejection"`` \| ``"unload"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementRef` | `RefObject`<`ElementType`\> | A React ref object containing the element to which the event listener will be attached |
| `type` | `ListenerType` | A case-sensitive string representing the [event type](https://developer.mozilla.org/en-US/docs/Web/Events) to listen for |
| `listener` | (`event`: [`EventMap`](use_event_listener.md#eventmap)[`ListenerType`]) => `void` | The event listener callback that fires in response to the event being dispatched |
| `options?` | [`UseEventListenerOptions`](../interfaces/use_event_listener.UseEventListenerOptions.md) | An options object that specifies characteristics about the event listener |

#### Returns

`void`

#### Defined in

[use-event-listener.ts:35](https://github.com/chaance/hooks/blob/99e93c4/src/use-event-listener.ts#L35)
