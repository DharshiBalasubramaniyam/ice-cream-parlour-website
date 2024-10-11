import { RepeatMatch } from '../../types';
import Matching from '../../Matching';
interface RepeatMatchOptions {
    password: string;
    omniMatch: Matching;
}
declare class MatchRepeat {
    match({ password, omniMatch }: RepeatMatchOptions): RepeatMatch[] | Promise<RepeatMatch[]>;
    normalizeMatch(baseToken: string, j: number, match: RegExpExecArray, baseGuesses: number | Promise<number>): RepeatMatch | Promise<RepeatMatch>;
    getGreedyMatch(password: string, lastIndex: number): RegExpExecArray | null;
    getLazyMatch(password: string, lastIndex: number): RegExpExecArray | null;
    setMatchToken(greedyMatch: RegExpExecArray, lazyMatch: RegExpExecArray | null): {
        match: RegExpExecArray | null;
        baseToken: string;
    };
    getBaseGuesses(baseToken: string, omniMatch: Matching): number | Promise<number>;
}
export default MatchRepeat;
