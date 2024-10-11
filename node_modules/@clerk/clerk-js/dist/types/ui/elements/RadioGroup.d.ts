import type { LocalizationKey } from '../customizables';
export declare const RadioLabel: (props: {
    label: string | LocalizationKey;
    description?: string | LocalizationKey;
    id?: string;
}) => import("@emotion/react/jsx-runtime").JSX.Element;
export declare const RadioItem: import("react").ForwardRefExoticComponent<{
    value: string;
    label: string | LocalizationKey;
    description?: string | LocalizationKey;
} & import("react").RefAttributes<HTMLInputElement>>;
