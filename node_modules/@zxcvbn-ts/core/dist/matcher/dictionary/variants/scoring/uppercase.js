'use strict';

var utils = require('../../../../scoring/utils.js');
var _const = require('../../../../data/const.js');

const getVariations = cleanedWord => {
  const wordArray = cleanedWord.split('');
  const upperCaseCount = wordArray.filter(char => char.match(_const.ONE_UPPER)).length;
  const lowerCaseCount = wordArray.filter(char => char.match(_const.ONE_LOWER)).length;
  let variations = 0;
  const variationLength = Math.min(upperCaseCount, lowerCaseCount);
  for (let i = 1; i <= variationLength; i += 1) {
    variations += utils.nCk(upperCaseCount + lowerCaseCount, i);
  }
  return variations;
};
var uppercaseVariant = (word => {
  // clean words of non alpha characters to remove the reward effekt to capitalize the first letter https://github.com/dropbox/zxcvbn/issues/232
  const cleanedWord = word.replace(_const.ALPHA_INVERTED, '');
  if (cleanedWord.match(_const.ALL_LOWER_INVERTED) || cleanedWord.toLowerCase() === cleanedWord) {
    return 1;
  }
  // a capitalized word is the most common capitalization scheme,
  // so it only doubles the search space (uncapitalized + capitalized).
  // all caps and end-capitalized are common enough too, underestimate as 2x factor to be safe.
  const commonCases = [_const.START_UPPER, _const.END_UPPER, _const.ALL_UPPER_INVERTED];
  const commonCasesLength = commonCases.length;
  for (let i = 0; i < commonCasesLength; i += 1) {
    const regex = commonCases[i];
    if (cleanedWord.match(regex)) {
      return 2;
    }
  }
  // otherwise calculate the number of ways to capitalize U+L uppercase+lowercase letters
  // with U uppercase letters or less. or, if there's more uppercase than lower (for eg. PASSwORD),
  // the number of ways to lowercase U+L letters with L lowercase letters or less.
  return getVariations(cleanedWord);
});

module.exports = uppercaseVariant;
//# sourceMappingURL=uppercase.js.map
