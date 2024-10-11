import type { FapiClient } from '../fapiClient';
export interface DevBrowser {
    clear(): void;
    setup(): Promise<void>;
    getDevBrowserJWT(): string | undefined;
    setDevBrowserJWT(jwt: string): void;
    removeDevBrowserJWT(): void;
}
export type CreateDevBrowserOptions = {
    frontendApi: string;
    cookieSuffix: string;
    fapiClient: FapiClient;
};
export declare function createDevBrowser({ cookieSuffix, frontendApi, fapiClient }: CreateDevBrowserOptions): DevBrowser;
