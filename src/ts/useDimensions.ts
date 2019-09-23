/*
 * Many existing `useDimensions` type hooks will use `getBoundingClientRect`
 * You may want to have access to a broader range of dimensions (border box, etc)
 * I'll probably abandon this approach and just use resize observer with a polyfill
 * to have its most up-to-date API for border-box measurements.
 * So probably maybe don't use this.
 */

import React, { useState, useRef, useLayoutEffect } from 'react';

type Dimensions = { width: number; height: number };

const cache = new Map();
const elementIsHidden = (target: HTMLElement): boolean => {
  const { offsetWidth, offsetHeight } = target;
  return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
const IE = /msie|trident/i.test(
  (global as any).navigator && (global as any).navigator.userAgent
);
const scrollRegEx = /auto|scroll/;
const parseDimension = (pixel: string | null): number =>
  parseFloat(pixel || '0');

export function useDimensions(
  passedRef: React.RefObject<HTMLElement | undefined>
) {
  const [{ width, height }, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  const ownRef = useRef<HTMLElement>(null);
  const ref = passedRef || ownRef;

  useLayoutEffect(() => {
    if (ref.current) {
      const { current: element } = ref;

      // Check cache and bail early if we can
      if (cache.has(element)) {
        const cached = cache.get(element);
        if (
          cached.width &&
          cached.height &&
          cached.width !== width &&
          cached.height !== height
        ) {
          setDimensions(cached);
          return;
        }
      }

      if (elementIsHidden(element)) {
        const newDimensions = {
          height: 0,
          width: 0,
        };
        if (0 !== height || 0 !== width) {
          cache.set(element, newDimensions);
          setDimensions(newDimensions);
          return;
        }
      }

      const {
        height: _height,
        width: _width,
        boxSizing,
        overflowY,
        overflowX,
        paddingTop: _paddingTop,
        paddingRight: _paddingRight,
        paddingBottom: _paddingBottom,
        paddingLeft: _paddingLeft,
        borderTopWidth,
        borderRightWidth,
        borderBottomWidth,
        borderLeftWidth,
      } = window.getComputedStyle(element);
      if (!_height || !_width) {
        return;
      }

      // START EXTRA CALCULATIONS -- TODO: Tests!
      // IE does not remove padding from width/height when box-sizing is border-box.
      const removePadding = !IE && boxSizing === 'border-box';

      // Could the element have any scrollbars?
      const canScrollVertically = scrollRegEx.test(overflowY || '');
      const canScrollHorizontally = scrollRegEx.test(overflowX || '');

      const borderTop = parseDimension(borderTopWidth);
      const borderRight = parseDimension(borderRightWidth);
      const borderBottom = parseDimension(borderBottomWidth);
      const borderLeft = parseDimension(borderLeftWidth);
      const horizontalBorderArea = borderLeft + borderRight;
      const verticalBorderArea = borderTop + borderBottom;

      const paddingTop = parseDimension(_paddingTop);
      const paddingRight = parseDimension(_paddingRight);
      const paddingBottom = parseDimension(_paddingBottom);
      const paddingLeft = parseDimension(_paddingLeft);
      const horizontalPadding = paddingLeft + paddingRight;
      const verticalPadding = paddingTop + paddingBottom;

      const horizontalScrollbarThickness = !canScrollHorizontally
        ? 0
        : element.offsetHeight - verticalBorderArea - element.clientHeight;
      const verticalScrollbarThickness = !canScrollVertically
        ? 0
        : element.offsetWidth - horizontalBorderArea - element.clientWidth;

      const widthReduction = removePadding
        ? horizontalPadding + horizontalBorderArea
        : 0;
      const heightReduction = removePadding
        ? verticalPadding + verticalBorderArea
        : 0;

      const contentWidth =
        parseDimension(_width) - widthReduction - verticalScrollbarThickness;
      const contentHeight =
        parseDimension(_height) -
        heightReduction -
        horizontalScrollbarThickness;

      const borderBoxWidth =
        contentWidth +
        horizontalPadding +
        verticalScrollbarThickness +
        horizontalBorderArea;
      const borderBoxHeight =
        contentHeight +
        verticalPadding +
        horizontalScrollbarThickness +
        verticalBorderArea;

      const newWidth = borderBoxWidth;
      const newHeight = borderBoxHeight;

      if (newHeight !== height || newWidth !== width) {
        const newDimensions = {
          height: newHeight,
          width: newWidth,
        };
        cache.set(element, newDimensions);
        setDimensions(newDimensions);
      }
    }
  }, [ref, width, height]);
  return [{ width, height }, ref] as [
    Dimensions,
    React.RefObject<HTMLElement | undefined>
  ];
}
