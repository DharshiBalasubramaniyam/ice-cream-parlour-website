import { PasswordChanges } from '../matching/unmunger/getCleanPasswords';
export interface L33tOptions {
    l33t: string;
    subs: PasswordChanges[];
    token: string;
}
export interface GetCountsOptions {
    token: string;
    sub: PasswordChanges;
}
declare const _default: ({ l33t, subs, token }: L33tOptions) => number;
export default _default;
