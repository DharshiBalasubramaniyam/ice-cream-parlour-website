import type { ElementProps, FloatingContext, FloatingTreeType, ReferenceType } from '../types';
export interface HandleCloseFn<RT extends ReferenceType = ReferenceType> {
    (context: FloatingContext<RT> & {
        onClose: () => void;
        tree?: FloatingTreeType<RT> | null;
        leave?: boolean;
    }): (event: MouseEvent) => void;
    __options: {
        blockPointerEvents: boolean;
    };
}
export declare function getDelay(value: UseHoverProps['delay'], prop: 'open' | 'close', pointerType?: PointerEvent['pointerType']): number | undefined;
export interface UseHoverProps<RT extends ReferenceType = ReferenceType> {
    enabled?: boolean;
    handleClose?: HandleCloseFn<RT> | null;
    restMs?: number;
    delay?: number | Partial<{
        open: number;
        close: number;
    }>;
    mouseOnly?: boolean;
    move?: boolean;
}
/**
 * Opens the floating element while hovering over the reference element, like
 * CSS `:hover`.
 * @see https://floating-ui.com/docs/useHover
 */
export declare function useHover<RT extends ReferenceType = ReferenceType>(context: FloatingContext<RT>, props?: UseHoverProps<RT>): ElementProps;
