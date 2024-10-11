import React from 'react';
import type { PrimitiveProps } from '../styledSystem';
import type { BoxProps } from './Box';
export type TrProps = PrimitiveProps<'tr'> & Omit<BoxProps, 'as'>;
export declare const Tr: React.ForwardRefExoticComponent<Omit<TrProps, "ref"> & React.RefAttributes<HTMLTableCellElement>>;
