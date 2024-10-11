import React from 'react';
type Responsive<T = Record<never, never>> = T & {
    size?: number;
    xDescriptors?: number[];
};
type ResponsivePrimitive<T> = React.FunctionComponent<Responsive<T>>;
export declare const makeResponsive: <P extends React.JSX.IntrinsicElements["img"]>(Component: React.FunctionComponent<P>) => ResponsivePrimitive<P>;
export {};
