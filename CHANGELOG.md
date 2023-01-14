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

### Features

- Added `useIsHydrated` hook

### Bug-fixes

- Memoize and stabilize `useForceUpdate` setter
