'use strict';

var Options = require('../../Options.js');
var _const = require('../../data/const.js');

const getDictionaryWarningPassword = (match, isSoleMatch) => {
  let warning = null;
  if (isSoleMatch && !match.l33t && !match.reversed) {
    if (match.rank <= 10) {
      warning = Options.zxcvbnOptions.translations.warnings.topTen;
    } else if (match.rank <= 100) {
      warning = Options.zxcvbnOptions.translations.warnings.topHundred;
    } else {
      warning = Options.zxcvbnOptions.translations.warnings.common;
    }
  } else if (match.guessesLog10 <= 4) {
    warning = Options.zxcvbnOptions.translations.warnings.similarToCommon;
  }
  return warning;
};
const getDictionaryWarningWikipedia = (match, isSoleMatch) => {
  let warning = null;
  if (isSoleMatch) {
    warning = Options.zxcvbnOptions.translations.warnings.wordByItself;
  }
  return warning;
};
const getDictionaryWarningNames = (match, isSoleMatch) => {
  if (isSoleMatch) {
    return Options.zxcvbnOptions.translations.warnings.namesByThemselves;
  }
  return Options.zxcvbnOptions.translations.warnings.commonNames;
};
const getDictionaryWarning = (match, isSoleMatch) => {
  let warning = null;
  const dictName = match.dictionaryName;
  const isAName = dictName === 'lastnames' || dictName.toLowerCase().includes('firstnames');
  if (dictName === 'passwords') {
    warning = getDictionaryWarningPassword(match, isSoleMatch);
  } else if (dictName.includes('wikipedia')) {
    warning = getDictionaryWarningWikipedia(match, isSoleMatch);
  } else if (isAName) {
    warning = getDictionaryWarningNames(match, isSoleMatch);
  } else if (dictName === 'userInputs') {
    warning = Options.zxcvbnOptions.translations.warnings.userInputs;
  }
  return warning;
};
var dictionaryMatcher = ((match, isSoleMatch) => {
  const warning = getDictionaryWarning(match, isSoleMatch);
  const suggestions = [];
  const word = match.token;
  if (word.match(_const.START_UPPER)) {
    suggestions.push(Options.zxcvbnOptions.translations.suggestions.capitalization);
  } else if (word.match(_const.ALL_UPPER_INVERTED) && word.toLowerCase() !== word) {
    suggestions.push(Options.zxcvbnOptions.translations.suggestions.allUppercase);
  }
  if (match.reversed && match.token.length >= 4) {
    suggestions.push(Options.zxcvbnOptions.translations.suggestions.reverseWords);
  }
  if (match.l33t) {
    suggestions.push(Options.zxcvbnOptions.translations.suggestions.l33t);
  }
  return {
    warning,
    suggestions
  };
});

module.exports = dictionaryMatcher;
//# sourceMappingURL=feedback.js.map
