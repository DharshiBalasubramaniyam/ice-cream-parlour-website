import { TranslationKeys, OptionsType, OptionsDictionary, OptionsL33tTable, OptionsGraph, RankedDictionaries, Matchers, Matcher } from './types';
import TrieNode from './matcher/dictionary/variants/matching/unmunger/TrieNode';
export declare class Options {
    matchers: Matchers;
    l33tTable: OptionsL33tTable;
    trieNodeRoot: TrieNode;
    dictionary: OptionsDictionary;
    rankedDictionaries: RankedDictionaries;
    rankedDictionariesMaxWordSize: Record<string, number>;
    translations: TranslationKeys;
    graphs: OptionsGraph;
    useLevenshteinDistance: boolean;
    levenshteinThreshold: number;
    l33tMaxSubstitutions: number;
    maxLength: number;
    constructor();
    setOptions(options?: OptionsType): void;
    setTranslations(translations: TranslationKeys): void;
    checkCustomTranslations(translations: TranslationKeys): boolean;
    setRankedDictionaries(): void;
    getRankedDictionariesMaxWordSize(list: (string | number)[]): number;
    buildSanitizedRankedDictionary(list: (string | number)[]): import("./types").LooseObject;
    extendUserInputsDictionary(dictionary: (string | number)[]): void;
    addMatcher(name: string, matcher: Matcher): void;
}
export declare const zxcvbnOptions: Options;
