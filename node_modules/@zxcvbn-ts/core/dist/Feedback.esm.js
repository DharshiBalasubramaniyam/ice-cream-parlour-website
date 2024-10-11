import { zxcvbnOptions } from './Options.esm.js';
import bruteforceMatcher from './matcher/bruteforce/feedback.esm.js';
import dateMatcher from './matcher/date/feedback.esm.js';
import dictionaryMatcher from './matcher/dictionary/feedback.esm.js';
import regexMatcher from './matcher/regex/feedback.esm.js';
import repeatMatcher from './matcher/repeat/feedback.esm.js';
import sequenceMatcher from './matcher/sequence/feedback.esm.js';
import spatialMatcher from './matcher/spatial/feedback.esm.js';
import separatorMatcher from './matcher/separator/feedback.esm.js';

const defaultFeedback = {
  warning: null,
  suggestions: []
};
/*
 * -------------------------------------------------------------------------------
 *  Generate feedback ---------------------------------------------------------------
 * -------------------------------------------------------------------------------
 */
class Feedback {
  constructor() {
    this.matchers = {
      bruteforce: bruteforceMatcher,
      date: dateMatcher,
      dictionary: dictionaryMatcher,
      regex: regexMatcher,
      repeat: repeatMatcher,
      sequence: sequenceMatcher,
      spatial: spatialMatcher,
      separator: separatorMatcher
    };
    this.defaultFeedback = {
      warning: null,
      suggestions: []
    };
    this.setDefaultSuggestions();
  }
  setDefaultSuggestions() {
    this.defaultFeedback.suggestions.push(zxcvbnOptions.translations.suggestions.useWords, zxcvbnOptions.translations.suggestions.noNeed);
  }
  getFeedback(score, sequence) {
    if (sequence.length === 0) {
      return this.defaultFeedback;
    }
    if (score > 2) {
      return defaultFeedback;
    }
    const extraFeedback = zxcvbnOptions.translations.suggestions.anotherWord;
    const longestMatch = this.getLongestMatch(sequence);
    let feedback = this.getMatchFeedback(longestMatch, sequence.length === 1);
    if (feedback !== null && feedback !== undefined) {
      feedback.suggestions.unshift(extraFeedback);
    } else {
      feedback = {
        warning: null,
        suggestions: [extraFeedback]
      };
    }
    return feedback;
  }
  getLongestMatch(sequence) {
    let longestMatch = sequence[0];
    const slicedSequence = sequence.slice(1);
    slicedSequence.forEach(match => {
      if (match.token.length > longestMatch.token.length) {
        longestMatch = match;
      }
    });
    return longestMatch;
  }
  getMatchFeedback(match, isSoleMatch) {
    if (this.matchers[match.pattern]) {
      return this.matchers[match.pattern](match, isSoleMatch);
    }
    if (zxcvbnOptions.matchers[match.pattern] && 'feedback' in zxcvbnOptions.matchers[match.pattern]) {
      return zxcvbnOptions.matchers[match.pattern].feedback(match, isSoleMatch);
    }
    return defaultFeedback;
  }
}

export { Feedback as default };
//# sourceMappingURL=Feedback.esm.js.map
