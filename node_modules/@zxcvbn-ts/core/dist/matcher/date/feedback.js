'use strict';

var Options = require('../../Options.js');

var dateMatcher = (() => {
  return {
    warning: Options.zxcvbnOptions.translations.warnings.dates,
    suggestions: [Options.zxcvbnOptions.translations.suggestions.dates]
  };
});

module.exports = dateMatcher;
//# sourceMappingURL=feedback.js.map
