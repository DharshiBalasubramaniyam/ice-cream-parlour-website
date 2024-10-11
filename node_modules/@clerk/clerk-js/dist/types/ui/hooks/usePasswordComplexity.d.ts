import type { ComplexityErrors, UsePasswordComplexityConfig } from '../../utils/passwords/complexity';
import type { LocalizationKey } from '../localization';
export declare const generateErrorTextUtil: ({ config, failedValidations, locale, t, }: {
    config: UsePasswordComplexityConfig;
    failedValidations: ComplexityErrors | undefined;
    locale: string;
    t: (localizationKey: LocalizationKey | string | undefined) => string;
}) => string;
export declare const usePasswordComplexity: (config: UsePasswordComplexityConfig) => {
    password: string;
    getComplexity: (password: string) => {
        failedValidationsText: string;
    };
    failedValidations: ComplexityErrors | undefined;
    failedValidationsText: string;
    hasFailedComplexity: boolean;
    hasPassedComplexity: boolean;
};
