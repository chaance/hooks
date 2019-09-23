[undefined](../README.md) › [Globals](../globals.md) › ["usePromise"](_usepromise_.md)

# External module: "usePromise"

## Index

### Interfaces

* [UsePromiseAction](../interfaces/_usepromise_.usepromiseaction.md)
* [UsePromiseState](../interfaces/_usepromise_.usepromisestate.md)

### Type aliases

* [PromiseStates](_usepromise_.md#promisestates)
* [UsePromiseReducer](_usepromise_.md#usepromisereducer)

### Functions

* [reducerForUsePromise](_usepromise_.md#const-reducerforusepromise)
* [resolvePromise](_usepromise_.md#const-resolvepromise)
* [usePromise](_usepromise_.md#usepromise)

### Object literals

* [initialState](_usepromise_.md#const-initialstate)

## Type aliases

###  PromiseStates

Ƭ **PromiseStates**: *"pending" | "rejected" | "resolved"*

Defined in usePromise.ts:102

___

###  UsePromiseReducer

Ƭ **UsePromiseReducer**: *function*

Defined in usePromise.ts:104

#### Type declaration:

▸ (`state`: [UsePromiseState](../interfaces/_usepromise_.usepromisestate.md), `action`: [UsePromiseAction](../interfaces/_usepromise_.usepromiseaction.md)): *[UsePromiseState](../interfaces/_usepromise_.usepromisestate.md)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [UsePromiseState](../interfaces/_usepromise_.usepromisestate.md) |
`action` | [UsePromiseAction](../interfaces/_usepromise_.usepromiseaction.md) |

## Functions

### `Const` reducerForUsePromise

▸ **reducerForUsePromise**(`state`: [UsePromiseState](../interfaces/_usepromise_.usepromisestate.md), `action`: [UsePromiseAction](../interfaces/_usepromise_.usepromiseaction.md)): *[UsePromiseState](../interfaces/_usepromise_.usepromisestate.md)*

Defined in usePromise.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`state` | [UsePromiseState](../interfaces/_usepromise_.usepromisestate.md) |
`action` | [UsePromiseAction](../interfaces/_usepromise_.usepromiseaction.md) |

**Returns:** *[UsePromiseState](../interfaces/_usepromise_.usepromisestate.md)*

___

### `Const` resolvePromise

▸ **resolvePromise**(`promise`: any): *any*

Defined in usePromise.ts:3

**Parameters:**

Name | Type |
------ | ------ |
`promise` | any |

**Returns:** *any*

___

###  usePromise

▸ **usePromise**<**T**>(`promise`: Promise‹T›, `deps?`: DependencyList): *[T, any, [PromiseStates](_usepromise_.md#promisestates)]*

Defined in usePromise.ts:41

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹T› |
`deps?` | DependencyList |

**Returns:** *[T, any, [PromiseStates](_usepromise_.md#promisestates)]*

## Object literals

### `Const` initialState

### ▪ **initialState**: *object*

Defined in usePromise.ts:11

###  error

• **error**: *undefined* =  undefined

Defined in usePromise.ts:12

###  result

• **result**: *undefined* =  undefined

Defined in usePromise.ts:13

###  state

• **state**: *"pending"* = "pending"

Defined in usePromise.ts:14
