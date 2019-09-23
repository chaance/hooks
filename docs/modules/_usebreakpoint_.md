[undefined](../README.md) › [Globals](../globals.md) › ["useBreakpoint"](_usebreakpoint_.md)

# External module: "useBreakpoint"

## Index

### Variables

* [defaultBreakpointKeys](_usebreakpoint_.md#const-defaultbreakpointkeys)
* [defaultZeroBreakpoint](_usebreakpoint_.md#const-defaultzerobreakpoint)

### Functions

* [getBreakpointQueryObject](_usebreakpoint_.md#const-getbreakpointqueryobject)
* [useBreakpoint](_usebreakpoint_.md#const-usebreakpoint)

### Object literals

* [breakpoints](_usebreakpoint_.md#const-breakpoints)

## Variables

### `Const` defaultBreakpointKeys

• **defaultBreakpointKeys**: *string[]* =  Object.keys(breakpoints)

Defined in useBreakpoint.ts:44

___

### `Const` defaultZeroBreakpoint

• **defaultZeroBreakpoint**: *string* =  defaultBreakpointKeys[0]

Defined in useBreakpoint.ts:45

## Functions

### `Const` getBreakpointQueryObject

▸ **getBreakpointQueryObject**(`bpQuery`: string | number, `toRem`: boolean): *object*

Defined in useBreakpoint.ts:55

Get a media query object from a query string or number.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`bpQuery` | string &#124; number |  defaultZeroBreakpoint | Breakpoint name, or px, rem, or em value to process. |
`toRem` | boolean | false | Whether or not to convert the query to rem units.  |

**Returns:** *object*

___

### `Const` useBreakpoint

▸ **useBreakpoint**(`bpQuery`: string | number, `defaultState`: boolean, `toRem`: boolean): *boolean*

Defined in useBreakpoint.ts:31

This hook lets you create simple string-based MQs similar to Foundation's
breakpoint sass mixin.

Set your breakpoints variable with breakpoint keys in ascending sizes
(small, medium, large, etc.), and then...

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`bpQuery` | string &#124; number | - | - |
`defaultState` | boolean | false | - |
`toRem` | boolean | true |   |

**Returns:** *boolean*

## Object literals

### `Const` breakpoints

### ▪ **breakpoints**: *object*

Defined in useBreakpoint.ts:4

###  large

• **large**: *number* = 924

Defined in useBreakpoint.ts:7

###  medium

• **medium**: *number* = 640

Defined in useBreakpoint.ts:6

###  small

• **small**: *number* = 0

Defined in useBreakpoint.ts:5

###  xlarge

• **xlarge**: *number* = 1200

Defined in useBreakpoint.ts:8

###  xxlarge

• **xxlarge**: *number* = 1440

Defined in useBreakpoint.ts:9

###  xxxlarge

• **xxxlarge**: *number* = 1600

Defined in useBreakpoint.ts:10
