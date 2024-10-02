[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-event-listener](../README.md) / useEventListener

# Function: useEventListener()

## useEventListener(element, type, listener, options)

> **useEventListener**\<`K`\>(`element`, `type`, `listener`, `options`?): `void`

A React hook to attach an event listener to a DOM node. This is most useful
for very simple one-off event listeners attached without conditions. The
listener is attached in `useEffect` and torn down in its cleanup phase.

If you need to attach multiple related events, it's generally better to set
those up in `useEffect` directly to reduce overhead and simplify.

### Type Parameters

• **K** *extends* keyof `WindowEventMap`

### Parameters

• **element**: `Window` \| `Nullish` \| `"window"`

The node reference to which the event listener will be
attached. This may take a few different shapes:
- If you want to attach the event listener to the global `window` or
  `document` objects, this can be a string of `"window"` or `"document"`
  respectively. This is useful to avoid null-checking in your component so
  that this is safe for SSR.
- A React ref object that contains the node. **You should always pass the ref
  itself rather than its current value.** The ref may not be attached when
  the effect runs, and since refs aren't stateful its value change won't
  re-trigger the effect, which means event listeners may never be attached.
- A direct reference to a DOM node. This is useful if the node is stateful,
  in which case the listener will be detached and re-attached to synchronize
  with React state.

• **type**: `K`

The name of the event to listen for.

• **listener**: `Nullish` \| (`evt`) => `any`

The event listener callback that fires in response to the
event being dispatched.

**This should always be stabilized between renders.** If the listener
reference can be saved without memoization (meaning that its dependencies
changing do not need to detach or re-attach the event listener), wrap the
listener in `useEffectEvent` to prevent attaching/detaching on every render.

• **options?**: [`UseEventListenerOptions`](../interfaces/UseEventListenerOptions.md)

An options object that specifies characteristics about the
event listener

### Returns

`void`

### Defined in

[use-event-listener.ts:40](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L40)

## useEventListener(element, type, listener, options)

> **useEventListener**\<`K`\>(`element`, `type`, `listener`, `options`?): `void`

### Type Parameters

• **K** *extends* keyof `DocumentEventMap`

### Parameters

• **element**: `Nullish` \| `"document"` \| `Document`

• **type**: `K`

• **listener**: `Nullish` \| (`evt`) => `any`

• **options?**: [`UseEventListenerOptions`](../interfaces/UseEventListenerOptions.md)

### Returns

`void`

### Defined in

[use-event-listener.ts:47](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L47)

## useEventListener(element, type, listener, options)

> **useEventListener**\<`T`, `K`\>(`element`, `type`, `listener`, `options`?): `void`

### Type Parameters

• **T** *extends* `HTMLElement`

• **K** *extends* keyof `HTMLElementEventMap`

### Parameters

• **element**: `Nullish` \| `T` \| `RefObject`\<`T`\>

• **type**: `K`

• **listener**: `Nullish` \| (`evt`) => `any`

• **options?**: [`UseEventListenerOptions`](../interfaces/UseEventListenerOptions.md)

### Returns

`void`

### Defined in

[use-event-listener.ts:54](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L54)

## useEventListener(element, type, listener, options)

> **useEventListener**\<`K`\>(`element`, `type`, `listener`, `options`?): `void`

### Type Parameters

• **K** *extends* keyof `HTMLElementEventMap`

### Parameters

• **element**: `Nullish` \| `HTMLElement` \| `RefObject`\<`HTMLElement`\>

• **type**: `K`

• **listener**: `Nullish` \| (`evt`) => `any`

• **options?**: [`UseEventListenerOptions`](../interfaces/UseEventListenerOptions.md)

### Returns

`void`

### Defined in

[use-event-listener.ts:64](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L64)

## useEventListener(element, type, listener, options)

> **useEventListener**\<`T`, `K`\>(`element`, `type`, `listener`, `options`?): `void`

### Type Parameters

• **T** *extends* `SVGElement`

• **K** *extends* keyof `SVGElementEventMap`

### Parameters

• **element**: `Nullish` \| `T` \| `RefObject`\<`T`\>

• **type**: `K`

• **listener**: `Nullish` \| (`evt`) => `any`

• **options?**: [`UseEventListenerOptions`](../interfaces/UseEventListenerOptions.md)

### Returns

`void`

### Defined in

[use-event-listener.ts:71](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L71)

## useEventListener(element, type, listener, options)

> **useEventListener**\<`K`\>(`element`, `type`, `listener`, `options`?): `void`

### Type Parameters

• **K** *extends* keyof `SVGElementEventMap`

### Parameters

• **element**: `Nullish` \| `SVGElement` \| `RefObject`\<`SVGElement`\>

• **type**: `K`

• **listener**: `Nullish` \| (`evt`) => `any`

• **options?**: [`UseEventListenerOptions`](../interfaces/UseEventListenerOptions.md)

### Returns

`void`

### Defined in

[use-event-listener.ts:81](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L81)

## useEventListener(element, type, listener, options)

> **useEventListener**\<`T`, `K`\>(`element`, `type`, `listener`, `options`?): `void`

### Type Parameters

• **T** *extends* `Element`

• **K** *extends* keyof `ElementEventMap`

### Parameters

• **element**: `Nullish` \| `T` \| `RefObject`\<`T`\>

• **type**: `K`

• **listener**: `Nullish` \| (`evt`) => `any`

• **options?**: [`UseEventListenerOptions`](../interfaces/UseEventListenerOptions.md)

### Returns

`void`

### Defined in

[use-event-listener.ts:88](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L88)

## useEventListener(element, type, listener, options)

> **useEventListener**\<`K`\>(`element`, `type`, `listener`, `options`?): `void`

### Type Parameters

• **K** *extends* keyof `ElementEventMap`

### Parameters

• **element**: `Nullish` \| `Element` \| `RefObject`\<`Element`\>

• **type**: `K`

• **listener**: `Nullish` \| (`evt`) => `any`

• **options?**: [`UseEventListenerOptions`](../interfaces/UseEventListenerOptions.md)

### Returns

`void`

### Defined in

[use-event-listener.ts:98](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-event-listener.ts#L98)
