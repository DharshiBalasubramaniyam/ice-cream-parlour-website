import type { HandleCloseFn } from './hooks/useHover';
import type { ReferenceType } from './types';
interface SafePolygonOptions {
    buffer: number;
    blockPointerEvents: boolean;
    requireIntent: boolean;
}
/**
 * Generates a safe polygon area that the user can traverse without closing the
 * floating element once leaving the reference element.
 * @see https://floating-ui.com/docs/useHover#safePolygon
 */
export declare function safePolygon<RT extends ReferenceType = ReferenceType>(options?: Partial<SafePolygonOptions>): HandleCloseFn<RT>;
export {};
