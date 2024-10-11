'use strict';

var Options = require('../../Options.js');

var spatialMatcher = (match => {
  let warning = Options.zxcvbnOptions.translations.warnings.keyPattern;
  if (match.turns === 1) {
    warning = Options.zxcvbnOptions.translations.warnings.straightRow;
  }
  return {
    warning,
    suggestions: [Options.zxcvbnOptions.translations.suggestions.longerKeyboardPattern]
  };
});

module.exports = spatialMatcher;
//# sourceMappingURL=feedback.js.map
