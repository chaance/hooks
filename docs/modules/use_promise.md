[@chance/hooks](../README.md) / [Exports](../modules.md) / use-promise

# Module: use-promise

## Table of contents

### References

- [default](use_promise.md#default)

### Enumerations

- [PromiseStates](../enums/use_promise.promisestates.md)

### Functions

- [usePromise](use_promise.md#usepromise)

## References

### default

Renames and exports: [usePromise](use_promise.md#usepromise)

## Functions

### usePromise

▸ **usePromise**<`ResolvedType`, `ErrorType`\>(`promise`): readonly [``null`` \| `ResolvedType`, `boolean`, ``null`` \| `ErrorType`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResolvedType` | `any` |
| `ErrorType` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | () => `Promise`<`ResolvedType`\> |

#### Returns

readonly [``null`` \| `ResolvedType`, `boolean`, ``null`` \| `ErrorType`]

#### Defined in

[use-promise.ts:9](https://github.com/chaance/hooks/blob/e2a7532/src/use-promise.ts#L9)
