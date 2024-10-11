import type { ElementProps, FloatingContext, ReferenceType } from '../types';
export interface UseRoleProps {
    enabled?: boolean;
    role?: 'tooltip' | 'dialog' | 'alertdialog' | 'menu' | 'listbox' | 'grid' | 'tree';
}
/**
 * Adds base screen reader props to the reference and floating elements for a
 * given floating element `role`.
 * @see https://floating-ui.com/docs/useRole
 */
export declare function useRole<RT extends ReferenceType = ReferenceType>(context: FloatingContext<RT>, props?: UseRoleProps): ElementProps;
