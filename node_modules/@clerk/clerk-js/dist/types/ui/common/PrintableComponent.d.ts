import React from 'react';
type OnPrintCallback = () => void;
type UsePrintableReturn = {
    print: () => void;
    printableProps: {
        onPrint: (cb: OnPrintCallback) => void;
    };
};
export declare const usePrintable: () => UsePrintableReturn;
export declare const PrintableComponent: (props: UsePrintableReturn["printableProps"] & React.PropsWithChildren) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
