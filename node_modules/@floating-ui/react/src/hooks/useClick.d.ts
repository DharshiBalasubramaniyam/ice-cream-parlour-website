import type { ElementProps, FloatingContext, ReferenceType } from '../types';
export interface UseClickProps {
    enabled?: boolean;
    event?: 'click' | 'mousedown';
    toggle?: boolean;
    ignoreMouse?: boolean;
    keyboardHandlers?: boolean;
}
/**
 * Opens or closes the floating element when clicking the reference element.
 * @see https://floating-ui.com/docs/useClick
 */
export declare function useClick<RT extends ReferenceType = ReferenceType>(context: FloatingContext<RT>, props?: UseClickProps): ElementProps;
