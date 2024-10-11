import * as React from 'react';
import type { ElementProps } from '../types';
/**
 * Merges an array of interaction hooks' props into prop getters, allowing
 * event handler functions to be composed together without overwriting one
 * another.
 * @see https://floating-ui.com/docs/react#interaction-hooks
 */
export declare function useInteractions(propsList?: Array<ElementProps | void>): {
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
};
