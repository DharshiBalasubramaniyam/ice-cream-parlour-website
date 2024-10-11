import React from 'react';
import type { PrimitiveProps, StateProps } from '../styledSystem';
export type ImageProps = PrimitiveProps<'img'> & StateProps;
export declare const Image: React.ForwardRefExoticComponent<Omit<ImageProps, "ref"> & React.RefAttributes<HTMLImageElement>>;
