import { DefaultFeedbackFunction, FeedbackType, MatchEstimated } from './types';
type Matchers = {
    [key: string]: DefaultFeedbackFunction;
};
declare class Feedback {
    readonly matchers: Matchers;
    defaultFeedback: FeedbackType;
    constructor();
    setDefaultSuggestions(): void;
    getFeedback(score: number, sequence: MatchEstimated[]): FeedbackType;
    getLongestMatch(sequence: MatchEstimated[]): MatchEstimated;
    getMatchFeedback(match: MatchEstimated, isSoleMatch: boolean): FeedbackType | null;
}
export default Feedback;
