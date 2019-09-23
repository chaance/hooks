[undefined](../README.md) › [Globals](../globals.md) › ["useDimensions"](_usedimensions_.md)

# External module: "useDimensions"

## Index

### Type aliases

* [Dimensions](_usedimensions_.md#dimensions)

### Variables

* [IE](_usedimensions_.md#const-ie)
* [cache](_usedimensions_.md#const-cache)
* [scrollRegEx](_usedimensions_.md#const-scrollregex)

### Functions

* [elementIsHidden](_usedimensions_.md#const-elementishidden)
* [parseDimension](_usedimensions_.md#const-parsedimension)
* [useDimensions](_usedimensions_.md#usedimensions)

## Type aliases

###  Dimensions

Ƭ **Dimensions**: *object*

Defined in useDimensions.ts:11

#### Type declaration:

* **height**: *number*

* **width**: *number*

## Variables

### `Const` IE

• **IE**: *boolean* =  /msie|trident/i.test(
  (global as any).navigator && (global as any).navigator.userAgent
)

Defined in useDimensions.ts:18

___

### `Const` cache

• **cache**: *Map‹any, any›* =  new Map()

Defined in useDimensions.ts:13

___

### `Const` scrollRegEx

• **scrollRegEx**: *RegExp* =  /auto|scroll/

Defined in useDimensions.ts:21

## Functions

### `Const` elementIsHidden

▸ **elementIsHidden**(`target`: HTMLElement): *boolean*

Defined in useDimensions.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`target` | HTMLElement |

**Returns:** *boolean*

___

### `Const` parseDimension

▸ **parseDimension**(`pixel`: string | null): *number*

Defined in useDimensions.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`pixel` | string &#124; null |

**Returns:** *number*

___

###  useDimensions

▸ **useDimensions**(`passedRef`: RefObject‹HTMLElement | undefined›): *[object, RefObject‹undefined | HTMLElement›]*

Defined in useDimensions.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`passedRef` | RefObject‹HTMLElement &#124; undefined› |

**Returns:** *[object, RefObject‹undefined | HTMLElement›]*
