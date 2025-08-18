[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-lazy-ref](../README.md) / useLazyRef

# Function: useLazyRef()

A lazily React ref lazily initialized with a function.

## Param

A function that returns the initial value of the ref.

## useLazyRef(init)

> **useLazyRef**\<`T`\>(`init`): `React.MutableRefObject`\<`T`\>

A lazily React ref lazily initialized with a function.

### Type Parameters

• **T**

### Parameters

• **init**

A function that returns the initial value of the ref.

### Returns

`React.MutableRefObject`\<`T`\>

### Param

A function that returns the initial value of the ref.

### Defined in

[src/use-lazy-ref.ts:9](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-lazy-ref.ts#L9)

## useLazyRef(init, initArg)

> **useLazyRef**\<`T`, `A`\>(`init`, `initArg`): `React.MutableRefObject`\<`T`\>

A lazily React ref lazily initialized with a function.

### Type Parameters

• **T**

• **A**

### Parameters

• **init**

A function that returns the initial value of the ref.

• **initArg**: `A`

An argument passed to the initializer function.

### Returns

`React.MutableRefObject`\<`T`\>

### Param

A function that returns the initial value of the ref.

### Defined in

[src/use-lazy-ref.ts:16](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-lazy-ref.ts#L16)
