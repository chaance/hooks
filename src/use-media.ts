import type { QueryObject } from "./use-match-media";
import { useMatchMedia, useMatchMediaLayoutEffect } from "./use-match-media";

/**
 * @alias useMatchMedia
 * @deprecated
 */
export const useMedia = useMatchMedia;

/**
 * @alias useMatchMediaLayoutEffect
 * @deprecated
 */
export const useLayoutMedia = useMatchMediaLayoutEffect;

export type { QueryObject };
