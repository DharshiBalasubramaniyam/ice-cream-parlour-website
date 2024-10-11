import * as React from 'react';
/**
 * Provides base styling for a fixed overlay element to dim content or block
 * pointer events behind a floating element.
 * It's a regular `<div>`, so it can be styled via any CSS solution you prefer.
 * @see https://floating-ui.com/docs/FloatingOverlay
 */
export declare const FloatingOverlay: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement> & {
    lockScroll?: boolean | undefined;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
