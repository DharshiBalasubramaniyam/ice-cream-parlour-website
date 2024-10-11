var l33tTableToTrieNode = ((l33tTable, triNode) => {
  Object.entries(l33tTable).forEach(([letter, substitutions]) => {
    substitutions.forEach(substitution => {
      triNode.addSub(substitution, letter);
    });
  });
  return triNode;
});

export { l33tTableToTrieNode as default };
//# sourceMappingURL=l33tTableToTrieNode.esm.js.map
