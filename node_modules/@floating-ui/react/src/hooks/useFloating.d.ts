import type { ReferenceType, UseFloatingOptions, UseFloatingReturn } from '../types';
/**
 * Provides data to position a floating element and context to add interactions.
 * @see https://floating-ui.com/docs/react
 */
export declare function useFloating<RT extends ReferenceType = ReferenceType>(options?: Partial<UseFloatingOptions>): UseFloatingReturn<RT>;
