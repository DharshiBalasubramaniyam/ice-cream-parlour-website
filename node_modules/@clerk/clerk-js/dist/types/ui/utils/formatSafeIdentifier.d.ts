export declare const isMaskedIdentifier: (str: string | undefined | null) => boolean | "" | null | undefined;
/**
 * Formats a string that can contain an email, a username or a phone number.
 * Depending on the scenario, the string might be obfuscated (parts of the identifier replaced with "*")
 * Refer to the tests for examples.
 */
export declare const formatSafeIdentifier: (str: string | undefined | null) => string | null | undefined;
