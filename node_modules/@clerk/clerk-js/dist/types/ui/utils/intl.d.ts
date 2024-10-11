/**
 * Intl.ListFormat was introduced in 2021
 * It is recommended to first check for browser support before using it
 */
export declare function canUseListFormat(locale: string | undefined): boolean;
export declare function canUseNumberFormat(locale: string | undefined): boolean;
export declare function formatToCompactNumber(value: number, locale: string): string;
