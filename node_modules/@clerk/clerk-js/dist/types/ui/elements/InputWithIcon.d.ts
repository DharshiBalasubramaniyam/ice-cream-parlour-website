import React from 'react';
import { Input } from '../customizables';
import type { PropsOfComponent } from '../styledSystem';
type InputWithIcon = PropsOfComponent<typeof Input> & {
    leftIcon?: React.ReactElement;
};
export declare const InputWithIcon: React.ForwardRefExoticComponent<Omit<InputWithIcon, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
