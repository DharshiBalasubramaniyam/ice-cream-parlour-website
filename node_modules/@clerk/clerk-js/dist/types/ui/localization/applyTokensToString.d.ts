export type GlobalTokens = {
    applicationName: string;
    'signIn.identifier': string;
    'user.firstName': string;
    'user.lastName': string;
    'user.username': string;
    'user.primaryEmailAddress': string;
    'user.primaryPhoneNumber': string;
};
export type Tokens = GlobalTokens & Record<string, string>;
export declare const applyTokensToString: (s: string | undefined, tokens: Tokens) => string;
export declare const useGlobalTokens: () => GlobalTokens;
