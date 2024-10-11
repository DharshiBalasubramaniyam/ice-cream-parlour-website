'use strict';

var Options = require('../../Options.js');

var repeatMatcher = (match => {
  let warning = Options.zxcvbnOptions.translations.warnings.extendedRepeat;
  if (match.baseToken.length === 1) {
    warning = Options.zxcvbnOptions.translations.warnings.simpleRepeat;
  }
  return {
    warning,
    suggestions: [Options.zxcvbnOptions.translations.suggestions.repeated]
  };
});

module.exports = repeatMatcher;
//# sourceMappingURL=feedback.js.map
