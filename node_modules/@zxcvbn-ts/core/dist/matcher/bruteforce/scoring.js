'use strict';

var _const = require('../../data/const.js');

var bruteforceMatcher = (({
  token
}) => {
  let guesses = _const.BRUTEFORCE_CARDINALITY ** token.length;
  if (guesses === Number.POSITIVE_INFINITY) {
    guesses = Number.MAX_VALUE;
  }
  let minGuesses;
  // small detail: make bruteforce matches at minimum one guess bigger than smallest allowed
  // submatch guesses, such that non-bruteforce submatches over the same [i..j] take precedence.
  if (token.length === 1) {
    minGuesses = _const.MIN_SUBMATCH_GUESSES_SINGLE_CHAR + 1;
  } else {
    minGuesses = _const.MIN_SUBMATCH_GUESSES_MULTI_CHAR + 1;
  }
  return Math.max(guesses, minGuesses);
});

module.exports = bruteforceMatcher;
//# sourceMappingURL=scoring.js.map
