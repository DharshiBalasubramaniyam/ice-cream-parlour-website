import * as React from 'react';
export declare const FloatingListContext: React.Context<{
    register: (node: Node) => void;
    unregister: (node: Node) => void;
    map: Map<Node, number | null>;
    elementsRef: React.MutableRefObject<Array<HTMLElement | null>>;
    labelsRef?: React.MutableRefObject<(string | null)[]> | undefined;
}>;
interface FloatingListProps {
    children: React.ReactNode;
    elementsRef: React.MutableRefObject<Array<HTMLElement | null>>;
    labelsRef?: React.MutableRefObject<Array<string | null>>;
}
/**
 * Provides context for a list of items within the floating element.
 * @see https://floating-ui.com/docs/FloatingList
 */
export declare function FloatingList({ children, elementsRef, labelsRef, }: FloatingListProps): JSX.Element;
export interface UseListItemProps {
    label?: string | null;
}
export declare function useListItem({ label }?: UseListItemProps): {
    ref: (node: HTMLElement | null) => void;
    index: number;
};
export {};
