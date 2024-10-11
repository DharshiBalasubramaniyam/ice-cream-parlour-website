import * as React from 'react';
import type { FloatingContext, ReferenceType } from '../types';
export interface FloatingFocusManagerProps<RT extends ReferenceType = ReferenceType> {
    context: FloatingContext<RT>;
    children: JSX.Element;
    disabled?: boolean;
    order?: Array<'reference' | 'floating' | 'content'>;
    initialFocus?: number | React.MutableRefObject<HTMLElement | null>;
    guards?: boolean;
    returnFocus?: boolean;
    modal?: boolean;
    visuallyHiddenDismiss?: boolean | string;
    closeOnFocusOut?: boolean;
}
/**
 * Provides focus management for the floating element.
 * @see https://floating-ui.com/docs/FloatingFocusManager
 */
export declare function FloatingFocusManager<RT extends ReferenceType = ReferenceType>(props: FloatingFocusManagerProps<RT>): JSX.Element;
