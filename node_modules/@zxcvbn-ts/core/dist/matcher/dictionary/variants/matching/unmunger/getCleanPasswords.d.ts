import TrieNode from './TrieNode';
export interface PasswordChanges {
    letter: string;
    substitution: string;
}
export type IndexedPasswordChanges = PasswordChanges & {
    i: number;
};
export interface PasswordWithSubs {
    password: string;
    changes: IndexedPasswordChanges[];
}
declare const getCleanPasswords: (password: string, limit: number, trieRoot: TrieNode) => PasswordWithSubs[];
export default getCleanPasswords;
