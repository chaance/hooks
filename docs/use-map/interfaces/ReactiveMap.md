[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-map](../README.md) / ReactiveMap

# Interface: ReactiveMap\<K, V\>

## Type Parameters

• **K**

• **V**

## Properties

### raw

> **raw**: `Map`\<`K`, `V`\>

#### Defined in

[use-map.ts:69](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-map.ts#L69)

***

### size

> `readonly` **size**: `number`

#### Defined in

[use-map.ts:79](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-map.ts#L79)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[use-map.ts:70](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-map.ts#L70)

***

### delete()

> **delete**(`key`): `void`

#### Parameters

• **key**: `K`

#### Returns

`void`

#### Defined in

[use-map.ts:71](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-map.ts#L71)

***

### get()

> **get**(`key`): `undefined` \| `V`

#### Parameters

• **key**: `K`

#### Returns

`undefined` \| `V`

#### Defined in

[use-map.ts:72](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-map.ts#L72)

***

### has()

> **has**(`key`): `boolean`

#### Parameters

• **key**: `K`

#### Returns

`boolean`

#### Defined in

[use-map.ts:73](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-map.ts#L73)

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

[use-map.ts:78](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-map.ts#L78)

***

### set()

> **set**(`key`, `action`): `void`

#### Parameters

• **key**: `K`

• **action**: `V` \| (`prevValue`, `prevState`) => `V`

#### Returns

`void`

#### Defined in

[use-map.ts:74](https://github.com/chaance/hooks/blob/3a106812f998ae2dc116bc6963936377cd0af671/src/use-map.ts#L74)
