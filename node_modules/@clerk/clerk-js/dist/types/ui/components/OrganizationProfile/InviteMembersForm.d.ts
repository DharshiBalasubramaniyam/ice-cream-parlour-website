import type { LocalizationKey } from '../../localization';
type InviteMembersFormProps = {
    onSuccess?: () => void;
    onReset?: () => void;
    primaryButtonLabel?: LocalizationKey;
    resetButtonLabel?: LocalizationKey;
};
export declare const InviteMembersForm: (props: InviteMembersFormProps) => import("@emotion/react/jsx-runtime").JSX.Element | null;
export {};
