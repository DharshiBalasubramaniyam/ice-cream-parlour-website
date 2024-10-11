import { REGEXEN } from '../../data/const';
interface RegexMatchOptions {
    password: string;
    regexes?: typeof REGEXEN;
}
declare class MatchRegex {
    match({ password, regexes }: RegexMatchOptions): import("../../types").MatchExtended[];
}
export default MatchRegex;
