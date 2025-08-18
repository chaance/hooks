[**@chance/hooks**](../../README.md) • **Docs**

***

[@chance/hooks](../../modules.md) / [use-controllable-state](../README.md) / useControllableState

# Function: useControllableState()

## useControllableState(value, defaultValue, onChange)

> **useControllableState**\<`T`, `C`, `A`\>(`value`, `defaultValue`, `onChange`?): [`T`, (`value`, ...`args`) => `void`]

### Type Parameters

• **T**

• **C** = `T`

• **A** *extends* `any`[] = []

### Parameters

• **value**: `Exclude`\<`T`, `undefined`\>

• **defaultValue**: `undefined` \| `Exclude`\<`T`, `undefined`\>

• **onChange?**

### Returns

[`T`, (`value`, ...`args`) => `void`]

### Defined in

[src/use-controllable-state.ts:17](https://github.com/chaance/hooks/blob/7d20cff8743741a411549973aea6ff2c66f90d38/src/use-controllable-state.ts#L17)

## useControllableState(value, defaultValue, onChange)

> **useControllableState**\<`T`, `C`, `A`\>(`value`, `defaultValue`, `onChange`?): [`T`, (`value`, ...`args`) => `void`]

### Type Parameters

• **T**

• **C** = `T`

• **A** *extends* `any`[] = []

### Parameters

• **value**: `undefined` \| `Exclude`\<`T`, `undefined`\>

• **defaultValue**: `Exclude`\<`T`, `undefined`\>

• **onChange?**

### Returns

[`T`, (`value`, ...`args`) => `void`]

### Defined in

[src/use-controllable-state.ts:23](https://github.com/chaance/hooks/blob/7d20cff8743741a411549973aea6ff2c66f90d38/src/use-controllable-state.ts#L23)
