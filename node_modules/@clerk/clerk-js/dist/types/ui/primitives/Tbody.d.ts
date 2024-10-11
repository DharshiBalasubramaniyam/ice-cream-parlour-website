import React from 'react';
import { type PrimitiveProps } from '../styledSystem';
import type { BoxProps } from './Box';
export type TbodyProps = PrimitiveProps<'tbody'> & Omit<BoxProps, 'as'>;
export declare const Tbody: React.ForwardRefExoticComponent<Omit<TbodyProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
