import type { ElementProps, FloatingContext, ReferenceType } from '../types';
export interface UseClientPointProps {
    enabled?: boolean;
    axis?: 'x' | 'y' | 'both';
    x?: number | null;
    y?: number | null;
}
/**
 * Positions the floating element relative to a client point (in the viewport),
 * such as the mouse position. By default, it follows the mouse cursor.
 * @see https://floating-ui.com/docs/useClientPoint
 */
export declare function useClientPoint<RT extends ReferenceType = ReferenceType>(context: FloatingContext<RT>, props?: UseClientPointProps): ElementProps;
