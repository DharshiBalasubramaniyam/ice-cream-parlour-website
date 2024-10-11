import * as React from 'react';
import type { ExtendedRefs } from '../types';
type FocusManagerState = {
    modal: boolean;
    open: boolean;
    onOpenChange: (open: boolean, event: Event) => void;
    refs: ExtendedRefs<any>;
    closeOnFocusOut: boolean;
} | null;
export declare function useFloatingPortalNode({ id, root, }?: {
    id?: string;
    root?: HTMLElement | null | React.MutableRefObject<HTMLElement | null>;
}): HTMLElement | null;
interface FloatingPortalProps {
    children?: React.ReactNode;
    id?: string;
    root?: HTMLElement | null | React.MutableRefObject<HTMLElement | null>;
    preserveTabOrder?: boolean;
}
/**
 * Portals the floating element into a given container element — by default,
 * outside of the app root and into the body.
 * @see https://floating-ui.com/docs/FloatingPortal
 */
export declare function FloatingPortal({ children, id, root, preserveTabOrder, }: FloatingPortalProps): JSX.Element;
export declare const usePortalContext: () => {
    preserveTabOrder: boolean;
    portalNode: HTMLElement | null;
    setFocusManagerState: React.Dispatch<React.SetStateAction<FocusManagerState>>;
    beforeInsideRef: React.RefObject<HTMLSpanElement>;
    afterInsideRef: React.RefObject<HTMLSpanElement>;
    beforeOutsideRef: React.RefObject<HTMLSpanElement>;
    afterOutsideRef: React.RefObject<HTMLSpanElement>;
} | null;
export {};
