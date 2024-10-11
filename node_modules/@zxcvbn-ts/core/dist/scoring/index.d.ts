import { MatchExtended, MatchEstimated } from '../types';
declare const _default: {
    mostGuessableMatchSequence(password: string, matches: MatchExtended[], excludeAdditive?: boolean): {
        password: string;
        guesses: number;
        guessesLog10: number;
        sequence: MatchEstimated[];
    };
    getGuesses(password: string, optimalSequenceLength: number): number;
};
export default _default;
