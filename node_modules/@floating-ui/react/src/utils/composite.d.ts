/// <reference types="react" />
export declare const ARROW_UP = "ArrowUp";
export declare const ARROW_DOWN = "ArrowDown";
export declare const ARROW_LEFT = "ArrowLeft";
export declare const ARROW_RIGHT = "ArrowRight";
export declare function isDifferentRow(index: number, cols: number, prevRow: number): boolean;
export declare function isIndexOutOfBounds(listRef: React.MutableRefObject<Array<HTMLElement | null>>, index: number): boolean;
export declare function getMinIndex(listRef: React.MutableRefObject<Array<HTMLElement | null>>, disabledIndices: Array<number> | undefined): number;
export declare function getMaxIndex(listRef: React.MutableRefObject<Array<HTMLElement | null>>, disabledIndices: Array<number> | undefined): number;
export declare function findNonDisabledIndex(listRef: React.MutableRefObject<Array<HTMLElement | null>>, { startingIndex, decrement, disabledIndices, amount, }?: {
    startingIndex?: number;
    decrement?: boolean;
    disabledIndices?: Array<number>;
    amount?: number;
}): number;
export declare function getGridNavigatedIndex(elementsRef: React.MutableRefObject<Array<HTMLElement | null>>, { event, orientation, loop, cols, disabledIndices, minIndex, maxIndex, prevIndex, stopEvent: stop, }: {
    event: React.KeyboardEvent;
    orientation: 'horizontal' | 'vertical' | 'both';
    loop: boolean;
    cols: number;
    disabledIndices: Array<number> | undefined;
    minIndex: number;
    maxIndex: number;
    prevIndex: number;
    stopEvent?: boolean;
}): number;
