import React from 'react';
interface PathRouterProps {
    basePath: string;
    preservedParams?: string[];
    children: React.ReactNode;
}
export declare const PathRouter: ({ basePath, preservedParams, children }: PathRouterProps) => JSX.Element | null;
export {};
