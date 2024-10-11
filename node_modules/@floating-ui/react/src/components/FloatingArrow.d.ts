import * as React from 'react';
import type { FloatingContext } from '../types';
export interface FloatingArrowProps extends React.SVGAttributes<SVGSVGElement> {
    /**
     * The floating context.
     */
    context: Omit<FloatingContext, 'refs'> & {
        refs: any;
    };
    /**
     * Width of the arrow.
     * @default 14
     */
    width?: number;
    /**
     * Height of the arrow.
     * @default 7
     */
    height?: number;
    /**
     * The corner radius (rounding) of the arrow tip.
     * @default 0 (sharp)
     */
    tipRadius?: number;
    /**
     * Forces a static offset over dynamic positioning under a certain condition.
     */
    staticOffset?: string | number | null;
    /**
     * Custom path string.
     */
    d?: string;
    /**
     * Stroke (border) color of the arrow.
     */
    stroke?: string;
    /**
     * Stroke (border) width of the arrow.
     */
    strokeWidth?: number;
}
/**
 * Renders a pointing arrow triangle.
 * @see https://floating-ui.com/docs/FloatingArrow
 */
export declare const FloatingArrow: React.ForwardRefExoticComponent<FloatingArrowProps & React.RefAttributes<SVGSVGElement>>;
