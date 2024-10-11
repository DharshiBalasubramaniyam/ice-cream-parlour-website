import React from 'react';
/**
 * Solves/ hides the "setState on unmounted component" warning
 * In 99% of cases, there is no memory leak involved, but still an annoying warning
 * For more info:
 * https://github.com/reactwg/react-18/discussions/82
 */
export declare function useSafeState<S>(initialState: S | (() => S)): [S, React.Dispatch<React.SetStateAction<S>>];
export declare function useSafeState<S = undefined>(): [S | undefined, React.Dispatch<React.SetStateAction<S | undefined>>];
