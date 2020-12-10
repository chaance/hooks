**[@chance/hooks](../README.md)**

> [Globals](../globals.md) / "src/use-promise"

# Module: "src/use-promise"

## Index

### Enumerations

* [PromiseStates](../enums/_src_use_promise_.promisestates.md)

### Type aliases

* [PromiseActions](_src_use_promise_.md#promiseactions)
* [PromiseState](_src_use_promise_.md#promisestate)

### Functions

* [usePromise](_src_use_promise_.md#usepromise)

## Type aliases

### PromiseActions

Ƭ  **PromiseActions**<ResolvedType, ErrorType\>: { type: [Loading](../enums/_src_use_promise_.promisestates.md#loading)  } \| { response: ResolvedType ; type: [Resolved](../enums/_src_use_promise_.promisestates.md#resolved)  } \| { error: ErrorType ; type: [Error](../enums/_src_use_promise_.promisestates.md#error)  }

*Defined in [src/use-promise.ts:70](https://github.com/chaance/hooks/blob/1abfd2e/src/use-promise.ts#L70)*

#### Type parameters:

Name |
------ |
`ResolvedType` |
`ErrorType` |

___

### PromiseState

Ƭ  **PromiseState**<ResolvedType, ErrorType\>: { error: null \| ErrorType ; loading: boolean ; response: null \| ResolvedType  }

*Defined in [src/use-promise.ts:64](https://github.com/chaance/hooks/blob/1abfd2e/src/use-promise.ts#L64)*

#### Type parameters:

Name |
------ |
`ResolvedType` |
`ErrorType` |

#### Type declaration:

Name | Type |
------ | ------ |
`error` | null \| ErrorType |
`loading` | boolean |
`response` | null \| ResolvedType |

## Functions

### usePromise

▸ **usePromise**<ResolvedType, ErrorType\>(`promise`: () => Promise<ResolvedType\>): [null \| ResolvedType, boolean, null \| ErrorType]

*Defined in [src/use-promise.ts:9](https://github.com/chaance/hooks/blob/1abfd2e/src/use-promise.ts#L9)*

#### Type parameters:

Name | Default |
------ | ------ |
`ResolvedType` | any |
`ErrorType` | any |

#### Parameters:

Name | Type |
------ | ------ |
`promise` | () => Promise<ResolvedType\> |

**Returns:** [null \| ResolvedType, boolean, null \| ErrorType]
