import { LooseObject } from './types';
export interface FindLevenshteinDistanceResult {
    levenshteinDistance: number;
    levenshteinDistanceEntry: string;
}
declare const findLevenshteinDistance: (password: string, rankedDictionary: LooseObject, threshold: number) => Partial<FindLevenshteinDistanceResult>;
export default findLevenshteinDistance;
