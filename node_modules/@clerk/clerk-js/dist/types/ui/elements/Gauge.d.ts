import React from 'react';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GaugeProps = {
    value: number;
    limit: number;
    size?: Size;
    strokeWidth?: number;
};
export declare const Gauge: React.MemoExoticComponent<(props: GaugeProps) => import("@emotion/react/jsx-runtime").JSX.Element>;
