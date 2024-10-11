import React from 'react';
import { Flex } from '../customizables';
import type { PropsOfComponent } from '../styledSystem';
type IdentityPreviewProps = {
    avatarUrl: string | null | undefined;
    identifier: string | null | undefined;
    onClick?: React.MouseEventHandler;
} & PropsOfComponent<typeof Flex>;
export declare const IdentityPreview: (props: IdentityPreviewProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
