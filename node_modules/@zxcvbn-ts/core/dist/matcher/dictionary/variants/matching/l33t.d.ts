import { L33tMatch } from '../../../../types';
import { DefaultMatch } from '../../types';
declare class MatchL33t {
    defaultMatch: DefaultMatch;
    constructor(defaultMatch: DefaultMatch);
    isAlreadyIncluded(matches: L33tMatch[], newMatch: L33tMatch): boolean;
    match({ password }: {
        password: string;
    }): L33tMatch[];
}
export default MatchL33t;
