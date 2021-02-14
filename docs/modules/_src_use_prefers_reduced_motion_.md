**[@chance/hooks](../README.md)**

> [Globals](../globals.md) / "src/use-prefers-reduced-motion"

# Module: "src/use-prefers-reduced-motion"

## Index

### Variables

* [PREFERS\_REDUCED\_MOTION\_NO\_PREF\_QUERY](_src_use_prefers_reduced_motion_.md#prefers_reduced_motion_no_pref_query)

### Functions

* [onPrefersReducedMotionChange](_src_use_prefers_reduced_motion_.md#onprefersreducedmotionchange)
* [usePrefersReducedMotion](_src_use_prefers_reduced_motion_.md#useprefersreducedmotion)

## Variables

### PREFERS\_REDUCED\_MOTION\_NO\_PREF\_QUERY

• `Const` **PREFERS\_REDUCED\_MOTION\_NO\_PREF\_QUERY**: \"(prefers-reduced-motion: no-preference)\" = "(prefers-reduced-motion: no-preference)"

*Defined in [src/use-prefers-reduced-motion.ts:3](https://github.com/chaance/hooks/blob/8a20513/src/use-prefers-reduced-motion.ts#L3)*

## Functions

### onPrefersReducedMotionChange

▸ **onPrefersReducedMotionChange**(`callback`: (prefers: boolean) => any, `globalWindow`: Window & *typeof* globalThis): (Anonymous function)

*Defined in [src/use-prefers-reduced-motion.ts:17](https://github.com/chaance/hooks/blob/8a20513/src/use-prefers-reduced-motion.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`callback` | (prefers: boolean) => any |
`globalWindow` | Window & *typeof* globalThis |

**Returns:** (Anonymous function)

___

### usePrefersReducedMotion

▸ **usePrefersReducedMotion**(`nodeRef`: RefObject<Element\>): boolean

*Defined in [src/use-prefers-reduced-motion.ts:6](https://github.com/chaance/hooks/blob/8a20513/src/use-prefers-reduced-motion.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`nodeRef` | RefObject<Element\> |

**Returns:** boolean
