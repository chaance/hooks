**[@chance/hooks](../README.md)**

> [Globals](../globals.md) / "src/use-match-media"

# Module: "src/use-match-media"

## Index

### Type aliases

* [QueryObject](_src_use_match_media_.md#queryobject)

### Variables

* [useMatchMedia](_src_use_match_media_.md#usematchmedia)
* [useMatchMediaLayoutEffect](_src_use_match_media_.md#usematchmedialayouteffect)

### Functions

* [createUseMatchMedia](_src_use_match_media_.md#createusematchmedia)

## Type aliases

### QueryObject

Ƭ  **QueryObject**: { [property:string]: string \| number \| boolean;  }

*Defined in [src/use-match-media.ts:39](https://github.com/chaance/hooks/blob/8a20513/src/use-match-media.ts#L39)*

## Variables

### useMatchMedia

• `Const` **useMatchMedia**: (Anonymous function) = createUseMatchMedia(React.useEffect)

*Defined in [src/use-match-media.ts:34](https://github.com/chaance/hooks/blob/8a20513/src/use-match-media.ts#L34)*

___

### useMatchMediaLayoutEffect

• `Const` **useMatchMediaLayoutEffect**: (Anonymous function) = createUseMatchMedia( React.useLayoutEffect)

*Defined in [src/use-match-media.ts:35](https://github.com/chaance/hooks/blob/8a20513/src/use-match-media.ts#L35)*

## Functions

### createUseMatchMedia

▸ **createUseMatchMedia**(`effect`: *typeof* useEffect): (Anonymous function)

*Defined in [src/use-match-media.ts:4](https://github.com/chaance/hooks/blob/8a20513/src/use-match-media.ts#L4)*

#### Parameters:

Name | Type |
------ | ------ |
`effect` | *typeof* useEffect |

**Returns:** (Anonymous function)
