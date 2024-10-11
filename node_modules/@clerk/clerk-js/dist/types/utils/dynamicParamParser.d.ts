export declare const createDynamicParamParser: ({ regex }: {
    regex: RegExp;
}) => <T extends Record<any, any>>({ urlWithParam, entity }: {
    urlWithParam: string;
    entity: T;
}) => string;
