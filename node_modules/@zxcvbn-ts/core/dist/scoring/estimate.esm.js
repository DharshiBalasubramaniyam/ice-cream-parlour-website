import { MIN_SUBMATCH_GUESSES_SINGLE_CHAR, MIN_SUBMATCH_GUESSES_MULTI_CHAR } from '../data/const.esm.js';
import utils from './utils.esm.js';
import { zxcvbnOptions } from '../Options.esm.js';
import bruteforceMatcher from '../matcher/bruteforce/scoring.esm.js';
import dateMatcher from '../matcher/date/scoring.esm.js';
import dictionaryMatcher from '../matcher/dictionary/scoring.esm.js';
import regexMatcher from '../matcher/regex/scoring.esm.js';
import repeatMatcher from '../matcher/repeat/scoring.esm.js';
import sequenceMatcher from '../matcher/sequence/scoring.esm.js';
import spatialMatcher from '../matcher/spatial/scoring.esm.js';
import separatorMatcher from '../matcher/separator/scoring.esm.js';

const getMinGuesses = (match, password) => {
  let minGuesses = 1;
  if (match.token.length < password.length) {
    if (match.token.length === 1) {
      minGuesses = MIN_SUBMATCH_GUESSES_SINGLE_CHAR;
    } else {
      minGuesses = MIN_SUBMATCH_GUESSES_MULTI_CHAR;
    }
  }
  return minGuesses;
};
const matchers = {
  bruteforce: bruteforceMatcher,
  date: dateMatcher,
  dictionary: dictionaryMatcher,
  regex: regexMatcher,
  repeat: repeatMatcher,
  sequence: sequenceMatcher,
  spatial: spatialMatcher,
  separator: separatorMatcher
};
const getScoring = (name, match) => {
  if (matchers[name]) {
    return matchers[name](match);
  }
  if (zxcvbnOptions.matchers[name] && 'scoring' in zxcvbnOptions.matchers[name]) {
    return zxcvbnOptions.matchers[name].scoring(match);
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

export { estimateGuesses as default };
//# sourceMappingURL=estimate.esm.js.map
