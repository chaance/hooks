[@chance/hooks](../README.md) / [Exports](../modules.md) / use-event-listener

# Module: use-event-listener

## Table of contents

### Type aliases

- [EventMap](use_event_listener.md#eventmap)

### Functions

- [useEventListener](use_event_listener.md#useeventlistener)
- [useEventListenerLayoutEffect](use_event_listener.md#useeventlistenerlayouteffect)
- [useLayoutEventListener](use_event_listener.md#uselayouteventlistener)

## Type aliases

### EventMap

Ƭ **EventMap**: `ElementEventMap` & `DocumentEventMap` & `WindowEventMap`

#### Defined in

[use-event-listener.ts:41](https://github.com/chaance/hooks/blob/e2a7532/src/use-event-listener.ts#L41)

## Functions

### useEventListener

▸ `Const` **useEventListener**<`ElementType`, `ListenerType`\>(`eventName`, `callback`, `element?`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementType` | extends `Window` & typeof `globalThis` \| `Document` \| `Element` |
| `ListenerType` | extends ``"fullscreenchange"`` \| ``"fullscreenerror"`` \| ``"pointerlockchange"`` \| ``"pointerlockerror"`` \| ``"readystatechange"`` \| ``"visibilitychange"`` \| ``"abort"`` \| ``"animationcancel"`` \| ``"animationend"`` \| ``"animationiteration"`` \| ``"animationstart"`` \| ``"auxclick"`` \| ``"beforeinput"`` \| ``"blur"`` \| ``"cancel"`` \| ``"canplay"`` \| ``"canplaythrough"`` \| ``"change"`` \| ``"click"`` \| ``"close"`` \| ``"compositionend"`` \| ``"compositionstart"`` \| ``"compositionupdate"`` \| ``"contextmenu"`` \| ``"cuechange"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragenter"`` \| ``"dragexit"`` \| ``"dragleave"`` \| ``"dragover"`` \| ``"dragstart"`` \| ``"drop"`` \| ``"durationchange"`` \| ``"emptied"`` \| ``"ended"`` \| ``"error"`` \| ``"focus"`` \| ``"focusin"`` \| ``"focusout"`` \| ``"gotpointercapture"`` \| ``"input"`` \| ``"invalid"`` \| ``"keydown"`` \| ``"keypress"`` \| ``"keyup"`` \| ``"load"`` \| ``"loadeddata"`` \| ``"loadedmetadata"`` \| ``"loadstart"`` \| ``"lostpointercapture"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"`` \| ``"pause"`` \| ``"play"`` \| ``"playing"`` \| ``"pointercancel"`` \| ``"pointerdown"`` \| ``"pointerenter"`` \| ``"pointerleave"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"progress"`` \| ``"ratechange"`` \| ``"reset"`` \| ``"resize"`` \| ``"scroll"`` \| ``"securitypolicyviolation"`` \| ``"seeked"`` \| ``"seeking"`` \| ``"select"`` \| ``"selectionchange"`` \| ``"selectstart"`` \| ``"stalled"`` \| ``"submit"`` \| ``"suspend"`` \| ``"timeupdate"`` \| ``"toggle"`` \| ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"`` \| ``"transitioncancel"`` \| ``"transitionend"`` \| ``"transitionrun"`` \| ``"transitionstart"`` \| ``"volumechange"`` \| ``"waiting"`` \| ``"wheel"`` \| ``"copy"`` \| ``"cut"`` \| ``"paste"`` \| ``"afterprint"`` \| ``"beforeprint"`` \| ``"beforeunload"`` \| ``"compassneedscalibration"`` \| ``"devicemotion"`` \| ``"deviceorientation"`` \| ``"deviceorientationabsolute"`` \| ``"gamepadconnected"`` \| ``"gamepaddisconnected"`` \| ``"hashchange"`` \| ``"message"`` \| ``"mousewheel"`` \| ``"offline"`` \| ``"online"`` \| ``"orientationchange"`` \| ``"pagehide"`` \| ``"pageshow"`` \| ``"popstate"`` \| ``"storage"`` \| ``"unload"`` \| ``"vrdisplayactivate"`` \| ``"vrdisplayblur"`` \| ``"vrdisplayconnect"`` \| ``"vrdisplaydeactivate"`` \| ``"vrdisplaydisconnect"`` \| ``"vrdisplaypresentchange"`` \| ``"languagechange"`` \| ``"messageerror"`` \| ``"rejectionhandled"`` \| ``"unhandledrejection"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `ListenerType` |
| `callback` | (`event`: [`EventMap`](use_event_listener.md#eventmap)[`ListenerType`]) => `void` |
| `element` | `ElementType` |
| `options` | `AddEventListenerOptions` |

#### Returns

`void`

#### Defined in

[use-event-listener.ts:31](https://github.com/chaance/hooks/blob/e2a7532/src/use-event-listener.ts#L31)

___

### useEventListenerLayoutEffect

▸ `Const` **useEventListenerLayoutEffect**<`ElementType`, `ListenerType`\>(`eventName`, `callback`, `element?`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementType` | extends `Window` & typeof `globalThis` \| `Document` \| `Element` |
| `ListenerType` | extends ``"fullscreenchange"`` \| ``"fullscreenerror"`` \| ``"pointerlockchange"`` \| ``"pointerlockerror"`` \| ``"readystatechange"`` \| ``"visibilitychange"`` \| ``"abort"`` \| ``"animationcancel"`` \| ``"animationend"`` \| ``"animationiteration"`` \| ``"animationstart"`` \| ``"auxclick"`` \| ``"beforeinput"`` \| ``"blur"`` \| ``"cancel"`` \| ``"canplay"`` \| ``"canplaythrough"`` \| ``"change"`` \| ``"click"`` \| ``"close"`` \| ``"compositionend"`` \| ``"compositionstart"`` \| ``"compositionupdate"`` \| ``"contextmenu"`` \| ``"cuechange"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragenter"`` \| ``"dragexit"`` \| ``"dragleave"`` \| ``"dragover"`` \| ``"dragstart"`` \| ``"drop"`` \| ``"durationchange"`` \| ``"emptied"`` \| ``"ended"`` \| ``"error"`` \| ``"focus"`` \| ``"focusin"`` \| ``"focusout"`` \| ``"gotpointercapture"`` \| ``"input"`` \| ``"invalid"`` \| ``"keydown"`` \| ``"keypress"`` \| ``"keyup"`` \| ``"load"`` \| ``"loadeddata"`` \| ``"loadedmetadata"`` \| ``"loadstart"`` \| ``"lostpointercapture"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"`` \| ``"pause"`` \| ``"play"`` \| ``"playing"`` \| ``"pointercancel"`` \| ``"pointerdown"`` \| ``"pointerenter"`` \| ``"pointerleave"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"progress"`` \| ``"ratechange"`` \| ``"reset"`` \| ``"resize"`` \| ``"scroll"`` \| ``"securitypolicyviolation"`` \| ``"seeked"`` \| ``"seeking"`` \| ``"select"`` \| ``"selectionchange"`` \| ``"selectstart"`` \| ``"stalled"`` \| ``"submit"`` \| ``"suspend"`` \| ``"timeupdate"`` \| ``"toggle"`` \| ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"`` \| ``"transitioncancel"`` \| ``"transitionend"`` \| ``"transitionrun"`` \| ``"transitionstart"`` \| ``"volumechange"`` \| ``"waiting"`` \| ``"wheel"`` \| ``"copy"`` \| ``"cut"`` \| ``"paste"`` \| ``"afterprint"`` \| ``"beforeprint"`` \| ``"beforeunload"`` \| ``"compassneedscalibration"`` \| ``"devicemotion"`` \| ``"deviceorientation"`` \| ``"deviceorientationabsolute"`` \| ``"gamepadconnected"`` \| ``"gamepaddisconnected"`` \| ``"hashchange"`` \| ``"message"`` \| ``"mousewheel"`` \| ``"offline"`` \| ``"online"`` \| ``"orientationchange"`` \| ``"pagehide"`` \| ``"pageshow"`` \| ``"popstate"`` \| ``"storage"`` \| ``"unload"`` \| ``"vrdisplayactivate"`` \| ``"vrdisplayblur"`` \| ``"vrdisplayconnect"`` \| ``"vrdisplaydeactivate"`` \| ``"vrdisplaydisconnect"`` \| ``"vrdisplaypresentchange"`` \| ``"languagechange"`` \| ``"messageerror"`` \| ``"rejectionhandled"`` \| ``"unhandledrejection"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `ListenerType` |
| `callback` | (`event`: [`EventMap`](use_event_listener.md#eventmap)[`ListenerType`]) => `void` |
| `element` | `ElementType` |
| `options` | `AddEventListenerOptions` |

#### Returns

`void`

#### Defined in

[use-event-listener.ts:32](https://github.com/chaance/hooks/blob/e2a7532/src/use-event-listener.ts#L32)

___

### useLayoutEventListener

▸ `Const` **useLayoutEventListener**<`ElementType`, `ListenerType`\>(`eventName`, `callback`, `element?`, `options?`): `void`

**`alias`** useEventListenerLayoutEffect

**`deprecated`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementType` | extends `Window` & typeof `globalThis` \| `Document` \| `Element` |
| `ListenerType` | extends ``"fullscreenchange"`` \| ``"fullscreenerror"`` \| ``"pointerlockchange"`` \| ``"pointerlockerror"`` \| ``"readystatechange"`` \| ``"visibilitychange"`` \| ``"abort"`` \| ``"animationcancel"`` \| ``"animationend"`` \| ``"animationiteration"`` \| ``"animationstart"`` \| ``"auxclick"`` \| ``"beforeinput"`` \| ``"blur"`` \| ``"cancel"`` \| ``"canplay"`` \| ``"canplaythrough"`` \| ``"change"`` \| ``"click"`` \| ``"close"`` \| ``"compositionend"`` \| ``"compositionstart"`` \| ``"compositionupdate"`` \| ``"contextmenu"`` \| ``"cuechange"`` \| ``"dblclick"`` \| ``"drag"`` \| ``"dragend"`` \| ``"dragenter"`` \| ``"dragexit"`` \| ``"dragleave"`` \| ``"dragover"`` \| ``"dragstart"`` \| ``"drop"`` \| ``"durationchange"`` \| ``"emptied"`` \| ``"ended"`` \| ``"error"`` \| ``"focus"`` \| ``"focusin"`` \| ``"focusout"`` \| ``"gotpointercapture"`` \| ``"input"`` \| ``"invalid"`` \| ``"keydown"`` \| ``"keypress"`` \| ``"keyup"`` \| ``"load"`` \| ``"loadeddata"`` \| ``"loadedmetadata"`` \| ``"loadstart"`` \| ``"lostpointercapture"`` \| ``"mousedown"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mousemove"`` \| ``"mouseout"`` \| ``"mouseover"`` \| ``"mouseup"`` \| ``"pause"`` \| ``"play"`` \| ``"playing"`` \| ``"pointercancel"`` \| ``"pointerdown"`` \| ``"pointerenter"`` \| ``"pointerleave"`` \| ``"pointermove"`` \| ``"pointerout"`` \| ``"pointerover"`` \| ``"pointerup"`` \| ``"progress"`` \| ``"ratechange"`` \| ``"reset"`` \| ``"resize"`` \| ``"scroll"`` \| ``"securitypolicyviolation"`` \| ``"seeked"`` \| ``"seeking"`` \| ``"select"`` \| ``"selectionchange"`` \| ``"selectstart"`` \| ``"stalled"`` \| ``"submit"`` \| ``"suspend"`` \| ``"timeupdate"`` \| ``"toggle"`` \| ``"touchcancel"`` \| ``"touchend"`` \| ``"touchmove"`` \| ``"touchstart"`` \| ``"transitioncancel"`` \| ``"transitionend"`` \| ``"transitionrun"`` \| ``"transitionstart"`` \| ``"volumechange"`` \| ``"waiting"`` \| ``"wheel"`` \| ``"copy"`` \| ``"cut"`` \| ``"paste"`` \| ``"afterprint"`` \| ``"beforeprint"`` \| ``"beforeunload"`` \| ``"compassneedscalibration"`` \| ``"devicemotion"`` \| ``"deviceorientation"`` \| ``"deviceorientationabsolute"`` \| ``"gamepadconnected"`` \| ``"gamepaddisconnected"`` \| ``"hashchange"`` \| ``"message"`` \| ``"mousewheel"`` \| ``"offline"`` \| ``"online"`` \| ``"orientationchange"`` \| ``"pagehide"`` \| ``"pageshow"`` \| ``"popstate"`` \| ``"storage"`` \| ``"unload"`` \| ``"vrdisplayactivate"`` \| ``"vrdisplayblur"`` \| ``"vrdisplayconnect"`` \| ``"vrdisplaydeactivate"`` \| ``"vrdisplaydisconnect"`` \| ``"vrdisplaypresentchange"`` \| ``"languagechange"`` \| ``"messageerror"`` \| ``"rejectionhandled"`` \| ``"unhandledrejection"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `ListenerType` |
| `callback` | (`event`: [`EventMap`](use_event_listener.md#eventmap)[`ListenerType`]) => `void` |
| `element` | `ElementType` |
| `options` | `AddEventListenerOptions` |

#### Returns

`void`

#### Defined in

[use-event-listener.ts:40](https://github.com/chaance/hooks/blob/e2a7532/src/use-event-listener.ts#L40)
