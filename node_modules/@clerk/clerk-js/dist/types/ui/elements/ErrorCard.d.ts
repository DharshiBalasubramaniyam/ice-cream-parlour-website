import React from 'react';
import type { LocalizationKey } from '../customizables';
type ErrorCardProps = {
    cardTitle?: LocalizationKey;
    cardSubtitle?: LocalizationKey;
    message?: LocalizationKey;
    onBackLinkClick?: React.MouseEventHandler | undefined;
    shouldNavigateBack?: boolean;
};
export declare const ErrorCard: (props: ErrorCardProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
