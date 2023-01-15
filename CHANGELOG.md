## v0.1.0

- Initial package released

## v0.1.1

- Made all types more readable
- Export `PromiseStates` enum in ["usePromise"](docs/modules/_use_promise_.md)

## v0.2.0

- Moved to the scope `@chance`; Install future versions with `npm i @chance/hooks`
- Renamed `useMedia` to `useMatchMedia` and `useLayoutMedia` to `useMatchMediaLayoutEffect`
- Renamed `useLayoutEventListener` to `useEventListenerLayoutEffect`
- Added `useStableCallback`, `usePrefersReducedMotion`, `useIsomorphicLayoutEffect`

## v0.2.1

- `useEventListener`: Add support for options parameter

## v0.3.0

### Breaking Changes

- Simplified build tooling which removed some polyfills for older browsers
- React v18+ is now a peer dependency
- `useUpdateEffect` has been removed, as it will not work with React v18's concurrent features or in `<React.StrictMode>`
- `useEventListener` no longer saves the handler in a ref. Consumers should be expected to provide their own memoized callback to prevent unnecessarily adding and removing the listener in every render cycle.
- `useStableCallback` now updates the callback in `useLayoutEffect` instead of `useEffect` by default
- The `history` array returned from `useStateWithHistory` is now stateful instead of a ref. This is more aligned with the React mental model when provided as a dependency, and it prevents issues with stale closures.
- Removed `use-media` module. `useMatchMedia` should be imported from `use-match-media` instead
- All default exports have been removed in favor of named exports

### Features

- Added `useIsHydrated` hook
- `useEventListener` now supports `signal` option

### Bug-fixes

- Memoize and stabilize `useForceUpdate` setter

### Other Changes

- Deprecated `usePrevious`, you probably shouldn't use it
