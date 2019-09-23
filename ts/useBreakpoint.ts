import { rem } from 'polished';
import { useMedia } from './useMedia';

export const breakpoints = {
  small: 0,
  medium: 640,
  large: 924,
  xlarge: 1200,
  xxlarge: 1440,
  xxxlarge: 1600,
};

/**
 * This hook lets you create simple string-based MQs similar to Foundation's
 * breakpoint sass mixin.
 *
 * Set your breakpoints variable with breakpoint keys in ascending sizes
 * (small, medium, large, etc.), and then...
 *
 * @example
 *   const isLargeScreen = useBreakpoint('large');
 *   const isTablet = useBreakpoint('medium only');
 *   const isTabletOrSmaller = useBreakpoint('medium down');
 *   const isAtLeastCustomSize = useBreakpoint(550);
 *   const isAtMostCustomRemSize = useBreakpoint('24rem down');
 *
 * @param bpQuery
 * @param defaultState
 * @param toRem
 */
export const useBreakpoint = (
  bpQuery: string | number,
  defaultState: boolean = false,
  toRem: boolean = true
) => {
  const queryObject = getBreakpointQueryObject(bpQuery, toRem);
  const matches = useMedia(queryObject, defaultState);
  return typeof window !== 'object' ? false : matches;
};

////////////////////////////////////////////////////////////////////////////////
// UTILS
////////////////////////////////////////////////////////////////////////////////
const defaultBreakpointKeys = Object.keys(breakpoints);
const defaultZeroBreakpoint = defaultBreakpointKeys[0];

/**
 * Get a media query object from a query string or number.
 * @example getBreakpointQuery('large up') === { minWidth: '74rem' }
 * @example getBreakpointQuery('medium only') === { minWidth: '64rem', maxWidth: '73.9875rem' }
 * @example getBreakpointQuery('350px', false) === { minWidth: 350 }
 * @param bpQuery - Breakpoint name, or px, rem, or em value to process.
 * @param toRem - Whether or not to convert the query to rem units.
 */
export const getBreakpointQueryObject = (
  bpQuery: string | number = defaultZeroBreakpoint,
  toRem = false
) => {
  const breakpointKeys = defaultBreakpointKeys;
  const zeroBreakpoint = defaultZeroBreakpoint;
  // Validate that zeroBreakpoint is equal to zero
  if (parseInt(breakpoints[zeroBreakpoint]) !== 0) {
    throw new Error(
      'The first key in the breakpoints object must have a value of `0`'
    );
  }
  breakpoints[zeroBreakpoint] = 0;

  // Tests for 1) Positive/negative operator (optional), 2) Numeric absolute value, and 3) unit
  const unitRegex = /^([+-]?(?:\d+|\d*\.\d+))(cm|in|em|mm|rem|px|pc|pt|ch|vh|vw|vmin|vmax|ex|%)$/;

  // If the bpQuery value is just a number, default to { minWidth: value }
  if (!isNaN(bpQuery as any)) {
    return {
      minWidth: toRem ? rem(Number(bpQuery)) : Number(bpQuery),
    };
  } else if (typeof bpQuery === 'string') {
    // Break the string into parts
    // First part is the value, second part is the modifier (if it exists)
    const bpQueryParts = bpQuery.split(' ').filter(Boolean);

    // Assign the value to a variable and, if it is numeric, convert it to a proper number
    let bp: string | number = isNaN(bpQueryParts[0] as any)
      ? bpQueryParts[0]
      : Number(bpQueryParts[0]);

    // Value for max-width media queries
    let bpMax: string | number = 0;

    // Direction of media query (up, down, or only)
    const directions = ['up', 'down', 'only'];
    const direction =
      bpQueryParts.length > 1
        ? directions.includes(bpQueryParts[1])
          ? bpQueryParts[1]
          : 'up'
        : 'up';

    // Eventual output
    let queryObject = {};

    // Is it a named media query?
    let named = false;

    // Orientation media queries have a unique syntax
    if (bp === 'landscape' || bp === 'portrait') {
      return { orientation: bp };
    } else if (bp === 'retina') {
      return [{ WebkitMinDevicePixelRatio: 2 }, { minResolution: '192dpi' }];
    }

    // Try to pull a named breakpoint out of the $breakpoints map
    if (typeof bp === 'string') {
      if (breakpointKeys.includes(bp)) {
        named = true;
        if (direction === 'only' || direction === 'down') {
          const bpMaxKey = breakpointKeys[breakpointKeys.indexOf(bp) + 1];
          bpMax = bpMaxKey ? breakpoints[bpMaxKey] : 0;
        }
        bp = breakpoints[bp];
        if (typeof bp === 'string') {
          if (bp.match(unitRegex)) {
            // Check If value is already a valid CSS unit
            bp = bp.indexOf('px') > -1 ? parseFloat(bp) : bp;
            if (isNaN(bp as any)) {
              console.warn(
                'All values in your `breakpoints` variable must be in pixels.'
              );
              bp = 0;
              named = false;
            }
          } else if (isNaN(bp as any)) {
            console.warn(
              'All values in your `breakpoints` variable must be in pixels.'
            );
            bp = 0;
            named = false;
          } else {
            bp = parseFloat(bp);
          }
        }
      } else if (bp.match(unitRegex)) {
        if (bp.indexOf('px') !== -1) {
          bp = toRem ? parseFloat(rem(bp)) : parseFloat(bp);
        }
        return direction === 'down' ? { maxWidth: bp } : { minWidth: bp };
      } else {
        bp = 0;
        console.warn(
          '`bpQuery` is not defined in your `breakpoints` variable.'
        );
      }
    }

    // Max value is 0.2px under the next breakpoint.
    // Use a precision under 1px to support browser zoom, but not too low to avoid rounding.
    if (bpMax && typeof bpMax === 'number') bpMax = bpMax - 0.2;

    if (toRem) {
      bp = bp > 0 ? parseFloat(rem(bp as number)) : 0;
      bpMax = bpMax > 0 ? parseFloat(rem(bpMax as number)) : 0;
    }

    // Conditions to skip media query creation
    // - It's a named breakpoint that resolved to "0 down" or "0 up"
    // - It's a numeric breakpoint that resolved to "0 " + anything
    if (bp > 0 || direction === 'only' || direction === 'down') {
      const actualBp = toRem ? `${bp}rem` : bp;
      const actualBpMax = toRem ? `${bpMax}rem` : bpMax;
      // `only` ranges use the format `(min-width: n) and (max-width: n)`
      if (direction === 'only') {
        // Only named media queries can have an "only" range
        if (named) {
          // Only use "min-width" if the floor is greater than 0
          if (bp > 0) {
            queryObject = { ...queryObject, minWidth: actualBp };
          }
          // Only use "max-width" if there's a ceiling
          if (bpMax) {
            queryObject = { ...queryObject, maxWidth: actualBpMax };
          }
        } else {
          console.warn('Only named media queries can have an `only` range');
        }
      } else if (direction === 'down') {
        // `down` ranges use the format `(max-width: n)`
        const max = named ? bpMax : bp;
        const actualMax = toRem ? `${max}rem` : max;

        // Skip media query creation if input value is exactly "0 down",
        // unless the function was called as "small down", in which case it's just "small only"
        if ((named || bp > 0) && max) {
          queryObject = { ...queryObject, maxWidth: actualMax };
        }
      } else if (bp > 0) {
        // `up` ranges use the format `(min-width: n)`
        queryObject = { ...queryObject, minWidth: actualBp };
      }
    }
    return queryObject;
  }
  return {};
};
