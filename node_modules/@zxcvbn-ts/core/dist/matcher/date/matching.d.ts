import { DateMatch } from '../../types';
interface DateMatchOptions {
    password: string;
}
declare class MatchDate {
    match({ password }: DateMatchOptions): import("../../types").MatchExtended[];
    getMatchesWithSeparator(password: string): DateMatch[];
    getMatchesWithoutSeparator(password: string): DateMatch[];
    filterNoise(matches: DateMatch[]): DateMatch[];
    mapIntegersToDayMonthYear(integers: number[]): {
        year: number;
        month: number;
        day: number;
    } | null;
    getDayMonth(integers: number[]): {
        year: number;
        month: number;
        day: number;
    } | null;
    mapIntegersToDayMonth(integers: number[]): {
        day: number;
        month: number;
    } | null;
    twoToFourDigitYear(year: number): number;
}
export default MatchDate;
