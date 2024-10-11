interface GISCredentialResponse {
    credential: string;
}
interface InitializeProps {
    client_id: string;
    callback: (params: GISCredentialResponse) => void;
    itp_support?: boolean;
    cancel_on_tap_outside?: boolean;
    auto_select?: boolean;
    use_fedcm_for_prompt?: boolean;
}
interface PromptMomentNotification {
    getMomentType: () => 'display' | 'skipped' | 'dismissed';
}
interface OneTapMethods {
    initialize: (params: InitializeProps) => void;
    prompt: (promptListener: (promptMomentNotification: PromptMomentNotification) => void) => void;
    cancel: () => void;
}
interface Accounts {
    id: OneTapMethods;
}
interface Google {
    accounts: Accounts;
}
declare global {
    export interface Window {
        google?: Google;
    }
}
declare function loadGIS(): Promise<Google>;
export { loadGIS };
export type { GISCredentialResponse };
