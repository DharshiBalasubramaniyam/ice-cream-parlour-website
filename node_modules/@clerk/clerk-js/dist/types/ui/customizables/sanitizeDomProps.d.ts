import React from 'react';
/**
 * Removes any non-native attributes before the components gets committed to the DOM
 * simply by destructuring the unwanted props out of `props`
 */
export declare const sanitizeDomProps: <P extends React.FunctionComponent<any>>(Component: P) => P;
