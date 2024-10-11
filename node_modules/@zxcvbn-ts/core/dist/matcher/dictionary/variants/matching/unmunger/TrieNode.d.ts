export default class TrieNode {
    parents: string[];
    constructor(parents?: string[]);
    children: Map<string, TrieNode>;
    subs?: string[];
    addSub(key: string, ...subs: string[]): TrieNode;
    getChild(child: string): TrieNode | undefined;
    isTerminal(): boolean;
    addChild(child: string): void;
    hasChild(child: string): boolean;
}
