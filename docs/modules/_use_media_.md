[@chancestrickland/hooks](../README.md) › [Globals](../globals.md) › ["use-media"](_use_media_.md)

# Module: "use-media"

## Index

### Type aliases

* [QueryObject](_use_media_.md#queryobject)

### Variables

* [useLayoutMedia](_use_media_.md#const-uselayoutmedia)
* [useMedia](_use_media_.md#const-usemedia)

### Functions

* [createUseMedia](_use_media_.md#createusemedia)

## Type aliases

###  QueryObject

Ƭ **QueryObject**: *object*

Defined in use-media.ts:43

#### Type declaration:

* \[ **property**: *string*\]: string | number | boolean

## Variables

### `Const` useLayoutMedia

• **useLayoutMedia**: *(Anonymous function)* = createUseMedia(useLayoutEffect)

Defined in use-media.ts:40

___

### `Const` useMedia

• **useMedia**: *(Anonymous function)* = createUseMedia(useEffect)

Defined in use-media.ts:39

## Functions

###  createUseMedia

▸ **createUseMedia**(`effect`: function): *(Anonymous function)*

Defined in use-media.ts:5

**Parameters:**

▪ **effect**: *function*

▸ (`effect`: React.EffectCallback, `deps?`: React.DependencyList | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`effect` | React.EffectCallback |
`deps?` | React.DependencyList &#124; undefined |

**Returns:** *(Anonymous function)*
