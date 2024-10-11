'use strict';

var Options = require('./Options.js');
var feedback = require('./matcher/bruteforce/feedback.js');
var feedback$1 = require('./matcher/date/feedback.js');
var feedback$2 = require('./matcher/dictionary/feedback.js');
var feedback$3 = require('./matcher/regex/feedback.js');
var feedback$4 = require('./matcher/repeat/feedback.js');
var feedback$5 = require('./matcher/sequence/feedback.js');
var feedback$6 = require('./matcher/spatial/feedback.js');
var feedback$7 = require('./matcher/separator/feedback.js');

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
      bruteforce: feedback,
      date: feedback$1,
      dictionary: feedback$2,
      regex: feedback$3,
      repeat: feedback$4,
      sequence: feedback$5,
      spatial: feedback$6,
      separator: feedback$7
    };
    this.defaultFeedback = {
      warning: null,
      suggestions: []
    };
    this.setDefaultSuggestions();
  }
  setDefaultSuggestions() {
    this.defaultFeedback.suggestions.push(Options.zxcvbnOptions.translations.suggestions.useWords, Options.zxcvbnOptions.translations.suggestions.noNeed);
  }
  getFeedback(score, sequence) {
    if (sequence.length === 0) {
      return this.defaultFeedback;
    }
    if (score > 2) {
      return defaultFeedback;
    }
    const extraFeedback = Options.zxcvbnOptions.translations.suggestions.anotherWord;
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
    if (Options.zxcvbnOptions.matchers[match.pattern] && 'feedback' in Options.zxcvbnOptions.matchers[match.pattern]) {
      return Options.zxcvbnOptions.matchers[match.pattern].feedback(match, isSoleMatch);
    }
    return defaultFeedback;
  }
}

module.exports = Feedback;
//# sourceMappingURL=Feedback.js.map
