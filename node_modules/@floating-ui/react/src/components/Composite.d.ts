import * as React from 'react';
type RenderProp = JSX.Element | ((props: React.HTMLAttributes<HTMLElement>) => JSX.Element);
interface CompositeProps {
    render?: RenderProp;
    orientation?: 'horizontal' | 'vertical' | 'both';
    loop?: boolean;
    cols?: number;
    disabledIndices?: number[];
}
export declare const Composite: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLElement> & CompositeProps, "ref"> & React.RefAttributes<HTMLElement>>;
export declare const CompositeItem: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLElement> & {
    render?: RenderProp | undefined;
}, "ref"> & React.RefAttributes<HTMLElement>>;
export {};
