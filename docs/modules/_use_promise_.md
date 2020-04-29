[@chancestrickland/hooks](../README.md) › [Globals](../globals.md) › ["use-promise"](_use_promise_.md)

# Module: "use-promise"

## Index

### Enumerations

* [PromiseActionTypes](../enums/_use_promise_.promiseactiontypes.md)

### Type aliases

* [PromiseActions](_use_promise_.md#promiseactions)
* [PromiseState](_use_promise_.md#promisestate)

### Functions

* [usePromise](_use_promise_.md#usepromise)

## Type aliases

###  PromiseActions

Ƭ **PromiseActions**: *object | object | object*

Defined in use-promise.ts:68

___

###  PromiseState

Ƭ **PromiseState**: *object*

Defined in use-promise.ts:62

#### Type declaration:

* **error**: *null | E*

* **loading**: *boolean*

* **response**: *null | T*

## Functions

###  usePromise

▸ **usePromise**<**T**, **E**>(`promise`: function): *[null | T, boolean, null | E]*

Defined in use-promise.ts:9

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

▪ **promise**: *function*

▸ (): *Promise‹T›*

**Returns:** *[null | T, boolean, null | E]*
