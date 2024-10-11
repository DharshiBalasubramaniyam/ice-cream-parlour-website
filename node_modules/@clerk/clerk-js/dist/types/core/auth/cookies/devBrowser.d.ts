export type DevBrowserCookieHandler = {
    set: (jwt: string) => void;
    get: () => string | undefined;
    remove: () => void;
};
/**
 * Create a long-lived JS cookie to store the dev browser token
 * ONLY for development instances.
 * The cookie is used to authenticate FAPI requests and pass
 * authentication from AP to the app.
 */
export declare const createDevBrowserCookie: (cookieSuffix: string) => DevBrowserCookieHandler;
