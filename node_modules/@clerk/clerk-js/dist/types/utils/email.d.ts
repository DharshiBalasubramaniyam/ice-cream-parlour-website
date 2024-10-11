export type BuildEmailAddressParams = {
    localPart: string;
    frontendApi: string;
};
export declare function buildEmailAddress({ localPart, frontendApi }: BuildEmailAddressParams): string;
