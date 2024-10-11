import { DictionaryMatch } from '../../types';
import Reverse from './variants/matching/reverse';
import L33t from './variants/matching/l33t';
import { DictionaryMatchOptions } from './types';
declare class MatchDictionary {
    l33t: L33t;
    reverse: Reverse;
    constructor();
    match({ password }: DictionaryMatchOptions): import("../../types").MatchExtended[];
    defaultMatch({ password, useLevenshtein }: DictionaryMatchOptions): DictionaryMatch[];
}
export default MatchDictionary;
