[@chance/hooks](../README.md) / [Exports](../modules.md) / use-event-listener

# Module: use-event-listener

## Table of contents

### Interfaces

- [UseEventListenerOptions](../interfaces/use_event_listener.UseEventListenerOptions.md)

### Type Aliases

- [EventMap](use_event_listener.md#eventmap)

### Functions

- [useEventListener](use_event_listener.md#useeventlistener)
- [useEventListenerLayoutEffect](use_event_listener.md#useeventlistenerlayouteffect)

## Type Aliases

### EventMap

Ƭ **EventMap**: `ElementEventMap` & `DocumentEventMap` & `WindowEventMap`

#### Defined in

[src/use-event-listener.ts:116](https://github.com/chaance/hooks/blob/f07c99b/src/use-event-listener.ts#L116)

## Functions

### useEventListener

▸ **useEventListener**<`ListenerType`\>(`type`, `listener`, `options?`): `void`

A React hook that attaches an event listener to the global window. The
listener is attached in an effect hook and torn down in its cleanup phase.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ListenerType` | extends ``"error"`` \| ``"load"`` \| ``"fullscreenchange"`` \| ``"fullscreenerror"`` \| ``"DOMContentLoaded"`` \| ``"pointerlockchange"`` \| ``"pointerlockerror"`` \| ``"readystatechange"`` \| ``"visibilitychange"`` \| ``"copy"`` \| ``"cut"`` \| ``"paste"`` \| ``"abort"`` \| ``"animationcancel"`` \| ``"animationend"`` \| ``"animationiteration"`` \| ``"animationstart"`` \| ``"auxclick"`` \| ``"beforeinput"`` \| ``"blur"`` \| ``"cancel"`` \| ``"canplay"`` \| ``"canplaythrough"`` \| ``"change"`` \| ``"click"`` \| ``"close"`` \| ``"compositionend"`` \| ``"compositionstart"`` \| ``"compositionupdate"`` \| ``"contextmenu"`` \| ``"cuechange"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragenter"`` \| ``"dragleave"`` \| ``"dragover"`` \| ``"dragstart"`` \| ``"drop"`` \| ``"durationchange"`` \| ``"emptied"`` \| ``"ended"`` \| ``"focus"`` \| ``"focusin"`` \| ``"focusout"`` \| ``"formdata"`` \| ``"gotpointercapture"`` \| ``"input"`` \| ``"invalid"`` \| ``"keydown"`` \| ``"keypress"`` \| ``"keyup"`` \| ``"loadeddata"`` \| ``"loadedmetadata"`` \| ``"loadstart"`` \| ``"lostpointercapture"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"`` \| ``"pause"`` \| ``"play"`` \| ``"playing"`` \| ``"pointercancel"`` \| ``"pointerdown"`` \| ``"pointerenter"`` \| ``"pointerleave"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"progress"`` \| ``"ratechange"`` \| ``"reset"`` \| ``"resize"`` \| ``"scroll"`` \| ``"securitypolicyviolation"`` \| ``"seeked"`` \| ``"seeking"`` \| ``"select"`` \| ``"selectionchange"`` \| ``"selectstart"`` \| ``"slotchange"`` \| ``"stalled"`` \| ``"submit"`` \| ``"suspend"`` \| ``"timeupdate"`` \| ``"toggle"`` \| ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"`` \| ``"transitioncancel"`` \| ``"transitionend"`` \| ``"transitionrun"`` \| ``"transitionstart"`` \| ``"volumechange"`` \| ``"waiting"`` \| ``"webkitanimationend"`` \| ``"webkitanimationiteration"`` \| ``"webkitanimationstart"`` \| ``"webkittransitionend"`` \| ``"wheel"`` \| ``"devicemotion"`` \| ``"deviceorientation"`` \| ``"gamepadconnected"`` \| ``"gamepaddisconnected"`` \| ``"orientationchange"`` \| ``"afterprint"`` \| ``"beforeprint"`` \| ``"beforeunload"`` \| ``"hashchange"`` \| ``"languagechange"`` \| ``"message"`` \| ``"messageerror"`` \| ``"offline"`` \| ``"online"`` \| ``"pagehide"`` \| ``"pageshow"`` \| ``"popstate"`` \| ``"rejectionhandled"`` \| ``"storage"`` \| ``"unhandledrejection"`` \| ``"unload"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `ListenerType` | A case-sensitive string representing the [event type](https://developer.mozilla.org/en-US/docs/Web/Events) to listen for |
| `listener` | (`event`: [`EventMap`](use_event_listener.md#eventmap)[`ListenerType`]) => `void` | The event listener callback that fires in response to the event being dispatched |
| `options?` | [`UseEventListenerOptions`](../interfaces/use_event_listener.UseEventListenerOptions.md) | An options object that specifies characteristics about the event listener |

#### Returns

`void`

#### Defined in

[src/use-event-listener.ts:16](https://github.com/chaance/hooks/blob/f07c99b/src/use-event-listener.ts#L16)

▸ **useEventListener**<`ElementType`, `ListenerType`\>(`elementRef`, `type`, `listener`, `options?`): `void`

A React hook that attaches an event listener to an element stored in a ref.
The listener is attached in an effect hook and torn down in its cleanup
phase.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementType` | extends `Window` & typeof `globalThis` \| `Document` \| `Element` |
| `ListenerType` | extends ``"error"`` \| ``"load"`` \| ``"fullscreenchange"`` \| ``"fullscreenerror"`` \| ``"DOMContentLoaded"`` \| ``"pointerlockchange"`` \| ``"pointerlockerror"`` \| ``"readystatechange"`` \| ``"visibilitychange"`` \| ``"copy"`` \| ``"cut"`` \| ``"paste"`` \| ``"abort"`` \| ``"animationcancel"`` \| ``"animationend"`` \| ``"animationiteration"`` \| ``"animationstart"`` \| ``"auxclick"`` \| ``"beforeinput"`` \| ``"blur"`` \| ``"cancel"`` \| ``"canplay"`` \| ``"canplaythrough"`` \| ``"change"`` \| ``"click"`` \| ``"close"`` \| ``"compositionend"`` \| ``"compositionstart"`` \| ``"compositionupdate"`` \| ``"contextmenu"`` \| ``"cuechange"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragenter"`` \| ``"dragleave"`` \| ``"dragover"`` \| ``"dragstart"`` \| ``"drop"`` \| ``"durationchange"`` \| ``"emptied"`` \| ``"ended"`` \| ``"focus"`` \| ``"focusin"`` \| ``"focusout"`` \| ``"formdata"`` \| ``"gotpointercapture"`` \| ``"input"`` \| ``"invalid"`` \| ``"keydown"`` \| ``"keypress"`` \| ``"keyup"`` \| ``"loadeddata"`` \| ``"loadedmetadata"`` \| ``"loadstart"`` \| ``"lostpointercapture"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"`` \| ``"pause"`` \| ``"play"`` \| ``"playing"`` \| ``"pointercancel"`` \| ``"pointerdown"`` \| ``"pointerenter"`` \| ``"pointerleave"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"progress"`` \| ``"ratechange"`` \| ``"reset"`` \| ``"resize"`` \| ``"scroll"`` \| ``"securitypolicyviolation"`` \| ``"seeked"`` \| ``"seeking"`` \| ``"select"`` \| ``"selectionchange"`` \| ``"selectstart"`` \| ``"slotchange"`` \| ``"stalled"`` \| ``"submit"`` \| ``"suspend"`` \| ``"timeupdate"`` \| ``"toggle"`` \| ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"`` \| ``"transitioncancel"`` \| ``"transitionend"`` \| ``"transitionrun"`` \| ``"transitionstart"`` \| ``"volumechange"`` \| ``"waiting"`` \| ``"webkitanimationend"`` \| ``"webkitanimationiteration"`` \| ``"webkitanimationstart"`` \| ``"webkittransitionend"`` \| ``"wheel"`` \| ``"devicemotion"`` \| ``"deviceorientation"`` \| ``"gamepadconnected"`` \| ``"gamepaddisconnected"`` \| ``"orientationchange"`` \| ``"afterprint"`` \| ``"beforeprint"`` \| ``"beforeunload"`` \| ``"hashchange"`` \| ``"languagechange"`` \| ``"message"`` \| ``"messageerror"`` \| ``"offline"`` \| ``"online"`` \| ``"pagehide"`` \| ``"pageshow"`` \| ``"popstate"`` \| ``"rejectionhandled"`` \| ``"storage"`` \| ``"unhandledrejection"`` \| ``"unload"`` |

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

[src/use-event-listener.ts:36](https://github.com/chaance/hooks/blob/f07c99b/src/use-event-listener.ts#L36)

___

### useEventListenerLayoutEffect

▸ **useEventListenerLayoutEffect**<`ListenerType`\>(`type`, `listener`, `options?`): `void`

A React hook that adds an event listener to a given element. If no element is
specified, the listener is attached to the global object.

The event listener is added and removed within a `useLayoutEffect`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ListenerType` | extends ``"error"`` \| ``"load"`` \| ``"fullscreenchange"`` \| ``"fullscreenerror"`` \| ``"DOMContentLoaded"`` \| ``"pointerlockchange"`` \| ``"pointerlockerror"`` \| ``"readystatechange"`` \| ``"visibilitychange"`` \| ``"copy"`` \| ``"cut"`` \| ``"paste"`` \| ``"abort"`` \| ``"animationcancel"`` \| ``"animationend"`` \| ``"animationiteration"`` \| ``"animationstart"`` \| ``"auxclick"`` \| ``"beforeinput"`` \| ``"blur"`` \| ``"cancel"`` \| ``"canplay"`` \| ``"canplaythrough"`` \| ``"change"`` \| ``"click"`` \| ``"close"`` \| ``"compositionend"`` \| ``"compositionstart"`` \| ``"compositionupdate"`` \| ``"contextmenu"`` \| ``"cuechange"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragenter"`` \| ``"dragleave"`` \| ``"dragover"`` \| ``"dragstart"`` \| ``"drop"`` \| ``"durationchange"`` \| ``"emptied"`` \| ``"ended"`` \| ``"focus"`` \| ``"focusin"`` \| ``"focusout"`` \| ``"formdata"`` \| ``"gotpointercapture"`` \| ``"input"`` \| ``"invalid"`` \| ``"keydown"`` \| ``"keypress"`` \| ``"keyup"`` \| ``"loadeddata"`` \| ``"loadedmetadata"`` \| ``"loadstart"`` \| ``"lostpointercapture"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"`` \| ``"pause"`` \| ``"play"`` \| ``"playing"`` \| ``"pointercancel"`` \| ``"pointerdown"`` \| ``"pointerenter"`` \| ``"pointerleave"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"progress"`` \| ``"ratechange"`` \| ``"reset"`` \| ``"resize"`` \| ``"scroll"`` \| ``"securitypolicyviolation"`` \| ``"seeked"`` \| ``"seeking"`` \| ``"select"`` \| ``"selectionchange"`` \| ``"selectstart"`` \| ``"slotchange"`` \| ``"stalled"`` \| ``"submit"`` \| ``"suspend"`` \| ``"timeupdate"`` \| ``"toggle"`` \| ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"`` \| ``"transitioncancel"`` \| ``"transitionend"`` \| ``"transitionrun"`` \| ``"transitionstart"`` \| ``"volumechange"`` \| ``"waiting"`` \| ``"webkitanimationend"`` \| ``"webkitanimationiteration"`` \| ``"webkitanimationstart"`` \| ``"webkittransitionend"`` \| ``"wheel"`` \| ``"devicemotion"`` \| ``"deviceorientation"`` \| ``"gamepadconnected"`` \| ``"gamepaddisconnected"`` \| ``"orientationchange"`` \| ``"afterprint"`` \| ``"beforeprint"`` \| ``"beforeunload"`` \| ``"hashchange"`` \| ``"languagechange"`` \| ``"message"`` \| ``"messageerror"`` \| ``"offline"`` \| ``"online"`` \| ``"pagehide"`` \| ``"pageshow"`` \| ``"popstate"`` \| ``"rejectionhandled"`` \| ``"storage"`` \| ``"unhandledrejection"`` \| ``"unload"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `ListenerType` |
| `listener` | (`event`: [`EventMap`](use_event_listener.md#eventmap)[`ListenerType`]) => `void` |
| `options?` | [`UseEventListenerOptions`](../interfaces/use_event_listener.UseEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

[src/use-event-listener.ts:16](https://github.com/chaance/hooks/blob/f07c99b/src/use-event-listener.ts#L16)

▸ **useEventListenerLayoutEffect**<`ElementType`, `ListenerType`\>(`elementRef`, `type`, `listener`, `options?`): `void`

A React hook that adds an event listener to a given element. If no element is
specified, the listener is attached to the global object.

The event listener is added and removed within a `useLayoutEffect`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementType` | extends `Window` & typeof `globalThis` \| `Document` \| `Element` |
| `ListenerType` | extends ``"error"`` \| ``"load"`` \| ``"fullscreenchange"`` \| ``"fullscreenerror"`` \| ``"DOMContentLoaded"`` \| ``"pointerlockchange"`` \| ``"pointerlockerror"`` \| ``"readystatechange"`` \| ``"visibilitychange"`` \| ``"copy"`` \| ``"cut"`` \| ``"paste"`` \| ``"abort"`` \| ``"animationcancel"`` \| ``"animationend"`` \| ``"animationiteration"`` \| ``"animationstart"`` \| ``"auxclick"`` \| ``"beforeinput"`` \| ``"blur"`` \| ``"cancel"`` \| ``"canplay"`` \| ``"canplaythrough"`` \| ``"change"`` \| ``"click"`` \| ``"close"`` \| ``"compositionend"`` \| ``"compositionstart"`` \| ``"compositionupdate"`` \| ``"contextmenu"`` \| ``"cuechange"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragenter"`` \| ``"dragleave"`` \| ``"dragover"`` \| ``"dragstart"`` \| ``"drop"`` \| ``"durationchange"`` \| ``"emptied"`` \| ``"ended"`` \| ``"focus"`` \| ``"focusin"`` \| ``"focusout"`` \| ``"formdata"`` \| ``"gotpointercapture"`` \| ``"input"`` \| ``"invalid"`` \| ``"keydown"`` \| ``"keypress"`` \| ``"keyup"`` \| ``"loadeddata"`` \| ``"loadedmetadata"`` \| ``"loadstart"`` \| ``"lostpointercapture"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"`` \| ``"pause"`` \| ``"play"`` \| ``"playing"`` \| ``"pointercancel"`` \| ``"pointerdown"`` \| ``"pointerenter"`` \| ``"pointerleave"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"progress"`` \| ``"ratechange"`` \| ``"reset"`` \| ``"resize"`` \| ``"scroll"`` \| ``"securitypolicyviolation"`` \| ``"seeked"`` \| ``"seeking"`` \| ``"select"`` \| ``"selectionchange"`` \| ``"selectstart"`` \| ``"slotchange"`` \| ``"stalled"`` \| ``"submit"`` \| ``"suspend"`` \| ``"timeupdate"`` \| ``"toggle"`` \| ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"`` \| ``"transitioncancel"`` \| ``"transitionend"`` \| ``"transitionrun"`` \| ``"transitionstart"`` \| ``"volumechange"`` \| ``"waiting"`` \| ``"webkitanimationend"`` \| ``"webkitanimationiteration"`` \| ``"webkitanimationstart"`` \| ``"webkittransitionend"`` \| ``"wheel"`` \| ``"devicemotion"`` \| ``"deviceorientation"`` \| ``"gamepadconnected"`` \| ``"gamepaddisconnected"`` \| ``"orientationchange"`` \| ``"afterprint"`` \| ``"beforeprint"`` \| ``"beforeunload"`` \| ``"hashchange"`` \| ``"languagechange"`` \| ``"message"`` \| ``"messageerror"`` \| ``"offline"`` \| ``"online"`` \| ``"pagehide"`` \| ``"pageshow"`` \| ``"popstate"`` \| ``"rejectionhandled"`` \| ``"storage"`` \| ``"unhandledrejection"`` \| ``"unload"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementRef` | `RefObject`<`ElementType`\> |
| `type` | `ListenerType` |
| `listener` | (`event`: [`EventMap`](use_event_listener.md#eventmap)[`ListenerType`]) => `void` |
| `options?` | [`UseEventListenerOptions`](../interfaces/use_event_listener.UseEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

[src/use-event-listener.ts:36](https://github.com/chaance/hooks/blob/f07c99b/src/use-event-listener.ts#L36)
