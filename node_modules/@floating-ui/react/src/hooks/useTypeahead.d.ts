import * as React from 'react';
import type { ElementProps, FloatingContext, ReferenceType } from '../types';
export interface UseTypeaheadProps {
    listRef: React.MutableRefObject<Array<string | null>>;
    activeIndex: number | null;
    onMatch?: (index: number) => void;
    onTypingChange?: (isTyping: boolean) => void;
    enabled?: boolean;
    findMatch?: null | ((list: Array<string | null>, typedString: string) => string | null | undefined);
    resetMs?: number;
    ignoreKeys?: Array<string>;
    selectedIndex?: number | null;
}
/**
 * Provides a matching callback that can be used to focus an item as the user
 * types, often used in tandem with `useListNavigation()`.
 * @see https://floating-ui.com/docs/useTypeahead
 */
export declare function useTypeahead<RT extends ReferenceType = ReferenceType>(context: FloatingContext<RT>, props: UseTypeaheadProps): ElementProps;
