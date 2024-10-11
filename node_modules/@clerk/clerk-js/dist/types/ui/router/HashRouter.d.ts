import React from 'react';
export declare const hashRouterBase = "CLERK-ROUTER/HASH";
interface HashRouterProps {
    preservedParams?: string[];
    children: React.ReactNode;
}
export declare const HashRouter: ({ preservedParams, children }: HashRouterProps) => JSX.Element;
export {};
