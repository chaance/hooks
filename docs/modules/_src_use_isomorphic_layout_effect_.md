**[@chance/hooks](../README.md)**

> [Globals](../globals.md) / "src/use-isomorphic-layout-effect"

# Module: "src/use-isomorphic-layout-effect"

## Index

### Variables

* [useIsomorphicLayoutEffect](_src_use_isomorphic_layout_effect_.md#useisomorphiclayouteffect)

### Functions

* [canUseDOM](_src_use_isomorphic_layout_effect_.md#canusedom)
* [noop](_src_use_isomorphic_layout_effect_.md#noop)

## Variables

### useIsomorphicLayoutEffect

• `Const` **useIsomorphicLayoutEffect**: useLayoutEffect = canUseDOM() ? React.useLayoutEffect : noop

*Defined in [src/use-isomorphic-layout-effect.ts:6](https://github.com/chaance/hooks/blob/8a20513/src/use-isomorphic-layout-effect.ts#L6)*

See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect

## Functions

### canUseDOM

▸ **canUseDOM**(): boolean

*Defined in [src/use-isomorphic-layout-effect.ts:10](https://github.com/chaance/hooks/blob/8a20513/src/use-isomorphic-layout-effect.ts#L10)*

**Returns:** boolean

___

### noop

▸ **noop**(): void

*Defined in [src/use-isomorphic-layout-effect.ts:18](https://github.com/chaance/hooks/blob/8a20513/src/use-isomorphic-layout-effect.ts#L18)*

**Returns:** void
