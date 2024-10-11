import React from 'react';
import { Flex } from '../../customizables';
import type { PropsOfComponent } from '../../styledSystem';
type CardFooterProps = PropsOfComponent<typeof Flex> & {
    isProfileFooter?: boolean;
};
export declare const CardFooter: React.ForwardRefExoticComponent<Omit<CardFooterProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const CardFooterLinks: React.MemoExoticComponent<() => JSX.Element | null>;
export {};
