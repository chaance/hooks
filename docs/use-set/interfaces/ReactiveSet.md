[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-set](../README.md) / ReactiveSet

# Interface: ReactiveSet\<T\>

## Type Parameters

• **T**

## Properties

### raw

> **raw**: `Set`\<`T`\>

#### Defined in

[use-set.ts:71](https://github.com/chaance/hooks/blob/0cacdc50fca9d664ac982d22f2ca80053abd43bf/src/use-set.ts#L71)

***

### size

> `readonly` **size**: `number`

#### Defined in

[use-set.ts:77](https://github.com/chaance/hooks/blob/0cacdc50fca9d664ac982d22f2ca80053abd43bf/src/use-set.ts#L77)

## Methods

### add()

> **add**(`action`): `void`

#### Parameters

• **action**: `T` \| (`prevState`) => `T`

#### Returns

`void`

#### Defined in

[use-set.ts:72](https://github.com/chaance/hooks/blob/0cacdc50fca9d664ac982d22f2ca80053abd43bf/src/use-set.ts#L72)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[use-set.ts:73](https://github.com/chaance/hooks/blob/0cacdc50fca9d664ac982d22f2ca80053abd43bf/src/use-set.ts#L73)

***

### delete()

> **delete**(`value`): `void`

#### Parameters

• **value**: `T`

#### Returns

`void`

#### Defined in

[use-set.ts:74](https://github.com/chaance/hooks/blob/0cacdc50fca9d664ac982d22f2ca80053abd43bf/src/use-set.ts#L74)

***

### has()

> **has**(`value`): `boolean`

#### Parameters

• **value**: `T`

#### Returns

`boolean`

#### Defined in

[use-set.ts:75](https://github.com/chaance/hooks/blob/0cacdc50fca9d664ac982d22f2ca80053abd43bf/src/use-set.ts#L75)

***

### map()

> **map**\<`U`\>(`callbackFn`): `U`[]

#### Type Parameters

• **U**

#### Parameters

• **callbackFn**

#### Returns

`U`[]

#### Defined in

[use-set.ts:76](https://github.com/chaance/hooks/blob/0cacdc50fca9d664ac982d22f2ca80053abd43bf/src/use-set.ts#L76)
