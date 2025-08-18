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

[src/use-set.ts:71](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-set.ts#L71)

***

### size

> `readonly` **size**: `number`

#### Defined in

[src/use-set.ts:77](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-set.ts#L77)

## Methods

### add()

> **add**(`action`): `void`

#### Parameters

• **action**: `T` \| (`prevState`) => `T`

#### Returns

`void`

#### Defined in

[src/use-set.ts:72](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-set.ts#L72)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/use-set.ts:73](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-set.ts#L73)

***

### delete()

> **delete**(`value`): `void`

#### Parameters

• **value**: `T`

#### Returns

`void`

#### Defined in

[src/use-set.ts:74](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-set.ts#L74)

***

### has()

> **has**(`value`): `boolean`

#### Parameters

• **value**: `T`

#### Returns

`boolean`

#### Defined in

[src/use-set.ts:75](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-set.ts#L75)

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

[src/use-set.ts:76](https://github.com/chaance/hooks/blob/7d344c9759f36ef1d85cfbe0dde8739840c07970/src/use-set.ts#L76)
