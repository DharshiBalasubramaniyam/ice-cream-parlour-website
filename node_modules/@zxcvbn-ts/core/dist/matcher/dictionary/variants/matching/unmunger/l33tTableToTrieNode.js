'use strict';

var l33tTableToTrieNode = ((l33tTable, triNode) => {
  Object.entries(l33tTable).forEach(([letter, substitutions]) => {
    substitutions.forEach(substitution => {
      triNode.addSub(substitution, letter);
    });
  });
  return triNode;
});

module.exports = l33tTableToTrieNode;
//# sourceMappingURL=l33tTableToTrieNode.js.map
