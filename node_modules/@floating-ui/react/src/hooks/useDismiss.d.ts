import type { ElementProps, FloatingContext, ReferenceType } from '../types';
export declare const normalizeBubblesProp: (bubbles?: boolean | {
    escapeKey?: boolean;
    outsidePress?: boolean;
}) => {
    escapeKeyBubbles: boolean;
    outsidePressBubbles: boolean;
};
export interface DismissPayload {
    type: 'outsidePress' | 'referencePress' | 'escapeKey' | 'mouseLeave';
    data: {
        returnFocus: boolean | {
            preventScroll: boolean;
        };
    };
}
export interface UseDismissProps {
    enabled?: boolean;
    escapeKey?: boolean;
    referencePress?: boolean;
    referencePressEvent?: 'pointerdown' | 'mousedown' | 'click';
    outsidePress?: boolean | ((event: MouseEvent) => boolean);
    outsidePressEvent?: 'pointerdown' | 'mousedown' | 'click';
    ancestorScroll?: boolean;
    bubbles?: boolean | {
        escapeKey?: boolean;
        outsidePress?: boolean;
    };
}
/**
 * Closes the floating element when a dismissal is requested — by default, when
 * the user presses the `escape` key or outside of the floating element.
 * @see https://floating-ui.com/docs/useDismiss
 */
export declare function useDismiss<RT extends ReferenceType = ReferenceType>(context: FloatingContext<RT>, props?: UseDismissProps): ElementProps;
