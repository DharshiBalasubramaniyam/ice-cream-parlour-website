'use strict';

var _const = require('../data/const.js');
var utils = require('./utils.js');
var Options = require('../Options.js');
var scoring = require('../matcher/bruteforce/scoring.js');
var scoring$1 = require('../matcher/date/scoring.js');
var scoring$2 = require('../matcher/dictionary/scoring.js');
var scoring$3 = require('../matcher/regex/scoring.js');
var scoring$4 = require('../matcher/repeat/scoring.js');
var scoring$5 = require('../matcher/sequence/scoring.js');
var scoring$6 = require('../matcher/spatial/scoring.js');
var scoring$7 = require('../matcher/separator/scoring.js');

const getMinGuesses = (match, password) => {
  let minGuesses = 1;
  if (match.token.length < password.length) {
    if (match.token.length === 1) {
      minGuesses = _const.MIN_SUBMATCH_GUESSES_SINGLE_CHAR;
    } else {
      minGuesses = _const.MIN_SUBMATCH_GUESSES_MULTI_CHAR;
    }
  }
  return minGuesses;
};
const matchers = {
  bruteforce: scoring,
  date: scoring$1,
  dictionary: scoring$2,
  regex: scoring$3,
  repeat: scoring$4,
  sequence: scoring$5,
  spatial: scoring$6,
  separator: scoring$7
};
const getScoring = (name, match) => {
  if (matchers[name]) {
    return matchers[name](match);
  }
  if (Options.zxcvbnOptions.matchers[name] && 'scoring' in Options.zxcvbnOptions.matchers[name]) {
    return Options.zxcvbnOptions.matchers[name].scoring(match);
  }
  return 0;
};
// ------------------------------------------------------------------------------
// guess estimation -- one function per match pattern ---------------------------
// ------------------------------------------------------------------------------
// eslint-disable-next-line complexity, max-statements
var estimateGuesses = ((match, password) => {
  const extraData = {};
  // a match's guess estimate doesn't change. cache it.
  if ('guesses' in match && match.guesses != null) {
    return match;
  }
  const minGuesses = getMinGuesses(match, password);
  const estimationResult = getScoring(match.pattern, match);
  let guesses = 0;
  if (typeof estimationResult === 'number') {
    guesses = estimationResult;
  } else if (match.pattern === 'dictionary') {
    guesses = estimationResult.calculation;
    extraData.baseGuesses = estimationResult.baseGuesses;
    extraData.uppercaseVariations = estimationResult.uppercaseVariations;
    extraData.l33tVariations = estimationResult.l33tVariations;
  }
  const matchGuesses = Math.max(guesses, minGuesses);
  return {
    ...match,
    ...extraData,
    guesses: matchGuesses,
    guessesLog10: utils.log10(matchGuesses)
  };
});

module.exports = estimateGuesses;
//# sourceMappingURL=estimate.js.map
