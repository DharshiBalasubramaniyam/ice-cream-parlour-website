import type { ComponentProps } from 'react';
import { Col } from '../../customizables';
type ActionCardProps = ComponentProps<typeof Col> & {
    variant?: 'neutral' | 'destructive';
};
export declare const ActionCard: (props: ActionCardProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
