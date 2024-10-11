import * as React from 'react';
import type { ElementProps, FloatingContext, ReferenceType } from '../types';
export interface UseListNavigationProps {
    listRef: React.MutableRefObject<Array<HTMLElement | null>>;
    activeIndex: number | null;
    onNavigate?: (index: number | null) => void;
    enabled?: boolean;
    selectedIndex?: number | null;
    focusItemOnOpen?: boolean | 'auto';
    focusItemOnHover?: boolean;
    openOnArrowKeyDown?: boolean;
    disabledIndices?: Array<number>;
    allowEscape?: boolean;
    loop?: boolean;
    nested?: boolean;
    rtl?: boolean;
    virtual?: boolean;
    orientation?: 'vertical' | 'horizontal' | 'both';
    cols?: number;
    scrollItemIntoView?: boolean | ScrollIntoViewOptions;
    virtualItemRef?: React.MutableRefObject<HTMLElement | null>;
}
/**
 * Adds arrow key-based navigation of a list of items, either using real DOM
 * focus or virtual focus.
 * @see https://floating-ui.com/docs/useListNavigation
 */
export declare function useListNavigation<RT extends ReferenceType = ReferenceType>(context: FloatingContext<RT>, props: UseListNavigationProps): ElementProps;
