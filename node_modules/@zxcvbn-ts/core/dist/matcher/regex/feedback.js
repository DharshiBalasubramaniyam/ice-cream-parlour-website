'use strict';

var Options = require('../../Options.js');

var regexMatcher = (match => {
  if (match.regexName === 'recentYear') {
    return {
      warning: Options.zxcvbnOptions.translations.warnings.recentYears,
      suggestions: [Options.zxcvbnOptions.translations.suggestions.recentYears, Options.zxcvbnOptions.translations.suggestions.associatedYears]
    };
  }
  return {
    warning: null,
    suggestions: []
  };
});

module.exports = regexMatcher;
//# sourceMappingURL=feedback.js.map
