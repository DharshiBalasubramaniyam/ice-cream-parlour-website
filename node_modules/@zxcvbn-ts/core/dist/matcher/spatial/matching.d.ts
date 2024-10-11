import { LooseObject, SpatialMatch } from '../../types';
interface SpatialMatchOptions {
    password: string;
}
declare class MatchSpatial {
    SHIFTED_RX: RegExp;
    match({ password }: SpatialMatchOptions): import("../../types").MatchExtended[];
    checkIfShifted(graphName: string, password: string, index: number): 1 | 0;
    helper(password: string, graph: LooseObject, graphName: string): SpatialMatch[];
}
export default MatchSpatial;
