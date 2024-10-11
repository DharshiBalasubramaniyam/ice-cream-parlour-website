export declare const getQueryParams: (queryString: string) => Record<string, string>;
type StringifyQueryParamsOptions = {
    keyEncoder?: (key: string) => string;
};
export declare const stringifyQueryParams: (params: Record<string, string | undefined | null | object | boolean | Array<string | undefined | null>> | null | undefined | string, opts?: StringifyQueryParamsOptions) => string;
export {};
