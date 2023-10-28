[@chance/hooks](../README.md) / [Exports](../modules.md) / use-composed-event-handlers

# Module: use-composed-event-handlers

## Table of contents

### Functions

- [useComposedEventHandlers](use_composed_event_handlers.md#usecomposedeventhandlers)

## Functions

### useComposedEventHandlers

▸ **useComposedEventHandlers**<`T`\>(`...handlers`): (`event`: `T`) => `void`

Composes multiple event handlers into a single function. Any handler can call
`event.preventDefault()` to stop subsequent handlers from being called.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...handlers` | (`undefined` \| ``null`` \| (`event`: `T`) => `void`)[] | The event handlers to compose. It is generally a good idea to memoize the handlers, particularly if they are passed into a child component, used in an effect or provided to React context, as the returned function will otherwise be recreated on every render. |

#### Returns

`fn`

A function that will call each handler in the order it was provided.
If any handler calls `event.preventDefault()`, the subsequent handlers will
not be called.

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

##### Returns

`void`

#### Defined in

[use-composed-event-handlers.ts:16](https://github.com/chaance/hooks/blob/99e93c4/src/use-composed-event-handlers.ts#L16)
