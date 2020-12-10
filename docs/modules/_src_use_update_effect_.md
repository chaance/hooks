**[@chance/hooks](../README.md)**

> [Globals](../globals.md) / "src/use-update-effect"

# Module: "src/use-update-effect"

## Index

### Variables

* [useUpdateEffect](_src_use_update_effect_.md#useupdateeffect)
* [useUpdateLayoutEffect](_src_use_update_effect_.md#useupdatelayouteffect)

### Functions

* [createUseUpdateEffect](_src_use_update_effect_.md#createuseupdateeffect)

## Variables

### useUpdateEffect

• `Const` **useUpdateEffect**: useUpdateEffectHook = createUseUpdateEffect(React.useEffect)

*Defined in [src/use-update-effect.ts:20](https://github.com/chaance/hooks/blob/1abfd2e/src/use-update-effect.ts#L20)*

___

### useUpdateLayoutEffect

• `Const` **useUpdateLayoutEffect**: useUpdateEffectHook = createUseUpdateEffect( React.useLayoutEffect)

*Defined in [src/use-update-effect.ts:21](https://github.com/chaance/hooks/blob/1abfd2e/src/use-update-effect.ts#L21)*

## Functions

### createUseUpdateEffect

▸ **createUseUpdateEffect**(`effect`: *typeof* useEffect): useUpdateEffectHook

*Defined in [src/use-update-effect.ts:3](https://github.com/chaance/hooks/blob/1abfd2e/src/use-update-effect.ts#L3)*

#### Parameters:

Name | Type |
------ | ------ |
`effect` | *typeof* useEffect |

**Returns:** useUpdateEffectHook
