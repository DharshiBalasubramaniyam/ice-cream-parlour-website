import { SequenceMatch } from '../../types';
type UpdateParams = {
    i: number;
    j: number;
    delta: number;
    password: string;
    result: any[];
};
interface SequenceMatchOptions {
    password: string;
}
declare class MatchSequence {
    MAX_DELTA: number;
    match({ password }: SequenceMatchOptions): SequenceMatch[];
    update({ i, j, delta, password, result }: UpdateParams): number | null;
    getSequence(token: string): {
        sequenceName: string;
        sequenceSpace: number;
    };
}
export default MatchSequence;
