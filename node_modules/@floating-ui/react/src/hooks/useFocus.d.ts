import type { ElementProps, FloatingContext, ReferenceType } from '../types';
export interface UseFocusProps {
    enabled?: boolean;
    keyboardOnly?: boolean;
}
/**
 * Opens the floating element while the reference element has focus, like CSS
 * `:focus`.
 * @see https://floating-ui.com/docs/useFocus
 */
export declare function useFocus<RT extends ReferenceType = ReferenceType>(context: FloatingContext<RT>, props?: UseFocusProps): ElementProps;
