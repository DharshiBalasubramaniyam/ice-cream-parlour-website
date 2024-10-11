import { DefaultMatch } from '../../types';
declare class MatchReverse {
    defaultMatch: DefaultMatch;
    constructor(defaultMatch: DefaultMatch);
    match({ password }: {
        password: string;
    }): {
        token: string;
        reversed: boolean;
        i: number;
        j: number;
        pattern: "dictionary";
        matchedWord: string;
        rank: number;
        dictionaryName: import("../../../../types").DictionaryNames;
        l33t: boolean;
    }[];
}
export default MatchReverse;
