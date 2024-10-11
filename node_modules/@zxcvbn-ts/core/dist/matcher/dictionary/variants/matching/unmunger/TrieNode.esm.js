class TrieNode {
  constructor(parents = []) {
    this.parents = parents;
    // eslint-disable-next-line no-use-before-define
    this.children = new Map();
  }
  addSub(key, ...subs) {
    const firstChar = key.charAt(0);
    if (!this.children.has(firstChar)) {
      this.children.set(firstChar, new TrieNode([...this.parents, firstChar]));
    }
    let cur = this.children.get(firstChar);
    for (let i = 1; i < key.length; i += 1) {
      const c = key.charAt(i);
      if (!cur.hasChild(c)) {
        cur.addChild(c);
      }
      cur = cur.getChild(c);
    }
    cur.subs = (cur.subs || []).concat(subs);
    return this;
  }
  getChild(child) {
    return this.children.get(child);
  }
  isTerminal() {
    return !!this.subs;
  }
  addChild(child) {
    if (!this.hasChild(child)) {
      this.children.set(child, new TrieNode([...this.parents, child]));
    }
  }
  hasChild(child) {
    return this.children.has(child);
  }
}

export { TrieNode as default };
//# sourceMappingURL=TrieNode.esm.js.map
