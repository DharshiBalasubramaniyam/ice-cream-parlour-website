import { SeparatorMatch } from '../../types';
interface SeparatorMatchOptions {
    password: string;
}
declare class MatchSeparator {
    static getMostUsedSeparatorChar(password: string): string | undefined;
    static getSeparatorRegex(separator: string): RegExp;
    match({ password }: SeparatorMatchOptions): SeparatorMatch[];
}
export default MatchSeparator;
