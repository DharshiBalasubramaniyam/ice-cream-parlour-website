'use strict';

var uppercase = require('./variants/scoring/uppercase.js');
var l33t = require('./variants/scoring/l33t.js');

var dictionaryMatcher = (({
  rank,
  reversed,
  l33t: l33t$1,
  subs,
  token,
  dictionaryName
}) => {
  const baseGuesses = rank; // keep these as properties for display purposes
  const uppercaseVariations = uppercase(token);
  const l33tVariations = l33t({
    l33t: l33t$1,
    subs,
    token
  });
  const reversedVariations = reversed && 2 || 1;
  let calculation;
  if (dictionaryName === 'diceware') {
    // diceware dictionaries are special, so we get a simple scoring of 1/2 of 6^5 (6 digits on 5 dice)
    // to get fix entropy of ~12.9 bits for every entry https://en.wikipedia.org/wiki/Diceware#:~:text=The%20level%20of,bits
    calculation = 6 ** 5 / 2;
  } else {
    calculation = baseGuesses * uppercaseVariations * l33tVariations * reversedVariations;
  }
  return {
    baseGuesses,
    uppercaseVariations,
    l33tVariations,
    calculation
  };
});

module.exports = dictionaryMatcher;
//# sourceMappingURL=scoring.js.map
