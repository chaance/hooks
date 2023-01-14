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
- `useEventListener` no longer saves the handler in a ref. Consumers should be expected to provide their own memoized callback to prevent unnecessarily adding and removing the listener in every render cycle.
- `useStableCallback` now updates the callback in `useLayoutEffect` instead of `useEffect` by default

### Features

- Added `useIsHydrated` hook
- `useEventListener` now supports `signal` option

### Bug-fixes

- Memoize and stabilize `useForceUpdate` setter
