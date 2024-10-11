import React from 'react';
import type { PrimitiveProps } from '../styledSystem';
import type { FlexProps } from './Flex';
export type FormProps = PrimitiveProps<'form'> & Omit<FlexProps, 'onSubmit'>;
export declare const Form: React.ForwardRefExoticComponent<Omit<FormProps, "ref"> & React.RefAttributes<HTMLFormElement>>;
