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
- `useUpdateEffect` has been removed, as it will not work with React v18's
  concurrent features or in `<React.StrictMode>`
- `useEventListener` has changed in several respects:

  - The hook signature now has two overloads. If the first argument is a ref,
    its value will be used as the element to which the listener is attached.
    Otherwise, the first argument is the event type and the listener is attached
    to the `window` object.
    ```ts
    function useEventListener(type, listener, options) {}
    function useEventListener(elementRef, type, listener, options) {}
    ```
  - The listener function is no longer saved in a ref internally, which means it
    will be attached/removed on every render unless you memoize it with
    `useCallback`
  - `useLayoutEventListener` and `useEventListenerLayoutEffect` have been
    removed. The options in `useEventListener` can now accept an `effectHook`
    option which accepts either `useEffect` or `useLayoutEffect` to control the
    phase in which the listener is attached and removed.

- `useStableCallback` now updates the callback in `useLayoutEffect` instead of `useEffect` by default
- The `history` array returned from `useStateWithHistory` is now stateful
  instead of a ref. This is more aligned with the React mental model when
  provided as a dependency, and it prevents issues with stale closures.
- Removed `use-media` module. `useMatchMedia` should be imported from `use-match-media` instead
- All default exports have been removed in favor of named exports
- `useMatchMediaLayoutEffect` has been removed. The options in `useMatchMedia`
  can now accept an `effectHook` option which accepts either `useEffect` or
  `useLayoutEffect` to control the phase in which the listener is attached and
  removed.

### Features

- Added `useIsHydrated` hook
- `useEventListener` now supports `signal` option

### Bug-fixes

- Memoize and stabilize `useForceUpdate` setter

### Other Changes

- Deprecated `usePrevious`, you probably shouldn't use it

## v0.3.1

### Bug-fixes

- `useStateWithHistory`: Do not update state or history state if the new value
  is the same as the current value
- Fixed known bugs with `usePrevious` and un-marked it for deprecation. We no
  longer return a ref value (which is not stateful, won't trigger effects and is
  not safe in React 18), but a stateful value that updates only when React would
  update the value being tracked. This approach should be concurrent-safe and
  more reliable for rendering.

## v0.4.0

### Breaking Changes

- `useInterval` and `useTimeout` will now cancel their timers if `null` or
  `undefined` is passed as the time value. For the old behavior, pass `0`
  instead.
- Bumped build output target from ES2019 to ES2020

### Other Changes

- Added `useComposedEventHandlers`, `useComposedRefs`
- Updated build dependencies

## v0.5.0

### Breaking Changes

- Removed `usePrevious` hook
- Renamed `useIsomorphicLayoutEffect` to `useLayoutEffect`. No more alias!
- Removed `useStableCallback` in favor of `useEffectEvent`

### Other Changes

- Fixed export maps to support importing individual hook modules
