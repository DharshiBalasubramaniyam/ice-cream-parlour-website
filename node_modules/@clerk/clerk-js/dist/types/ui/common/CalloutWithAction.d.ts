import type { ComponentType, MouseEvent, PropsWithChildren } from 'react';
import type { LocalizationKey } from '../localization';
import type { ThemableCssProp } from '../styledSystem';
type CalloutWithActionProps = {
    text?: LocalizationKey | string;
    textSx?: ThemableCssProp;
    actionLabel?: LocalizationKey;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => Promise<unknown>;
    icon: ComponentType;
};
export declare const CalloutWithAction: (props: PropsWithChildren<CalloutWithActionProps>) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
