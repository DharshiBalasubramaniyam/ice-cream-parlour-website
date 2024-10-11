import { CrackTimesDisplay, CrackTimesSeconds, Score } from './types';
declare class TimeEstimates {
    translate(displayStr: string, value: number | undefined): string;
    estimateAttackTimes(guesses: number): {
        crackTimesSeconds: CrackTimesSeconds;
        crackTimesDisplay: CrackTimesDisplay;
        score: Score;
    };
    guessesToScore(guesses: number): Score;
    displayTime(seconds: number): string;
}
export default TimeEstimates;
