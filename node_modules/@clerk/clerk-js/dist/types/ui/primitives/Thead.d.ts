import React from 'react';
import type { PrimitiveProps } from '../styledSystem';
import type { BoxProps } from './Box';
export type TheadProps = PrimitiveProps<'thead'> & Omit<BoxProps, 'as'>;
export declare const Thead: React.ForwardRefExoticComponent<Omit<TheadProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
