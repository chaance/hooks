[@chance/hooks](../README.md) / [Exports](../modules.md) / use-composed-refs

# Module: use-composed-refs

## Table of contents

### Type Aliases

- [AssignableRef](use_composed_refs.md#assignableref)

### Functions

- [useComposedRefs](use_composed_refs.md#usecomposedrefs)

## Type Aliases

### AssignableRef

Ƭ **AssignableRef**<`ValueType`\>: { `bivarianceHack`: (`instance`: ``null`` \| `ValueType`) => `void`  }[``"bivarianceHack"``] \| `React.MutableRefObject`<`ValueType` \| ``null``\>

Either a React ref object created with `useRef` or `createRef`, or a ref
callback function

#### Type parameters

| Name |
| :------ |
| `ValueType` |

#### Defined in

[use-composed-refs.ts:33](https://github.com/chaance/hooks/blob/99e93c4/src/use-composed-refs.ts#L33)

## Functions

### useComposedRefs

▸ **useComposedRefs**<`RefValueType`\>(`...refs`): (`node`: `RefValueType`) => `void`

Passes or assigns a value to multiple refs (typically a DOM node). Useful for
dealing with components that need an explicit ref for DOM calculations but
also forwards refs assigned by an app.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefValueType` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...refs` | (`undefined` \| ``null`` \| [`AssignableRef`](use_composed_refs.md#assignableref)<`RefValueType`\>)[] | The refs to assign. These may be objects created with `useRef` or `createRef`, or ref callback functions. It is important that callback refs are memoized, just as they would be when assinging a ref to an element directly. |

#### Returns

`fn`

A callback ref that will assign (or call with, in the case of
functions) the same value to all provided refs.

▸ (`node`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `RefValueType` |

##### Returns

`void`

#### Defined in

[use-composed-refs.ts:15](https://github.com/chaance/hooks/blob/99e93c4/src/use-composed-refs.ts#L15)
