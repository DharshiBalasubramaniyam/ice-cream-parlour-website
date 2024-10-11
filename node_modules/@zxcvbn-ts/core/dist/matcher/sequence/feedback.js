'use strict';

var Options = require('../../Options.js');

var sequenceMatcher = (() => {
  return {
    warning: Options.zxcvbnOptions.translations.warnings.sequences,
    suggestions: [Options.zxcvbnOptions.translations.suggestions.sequences]
  };
});

module.exports = sequenceMatcher;
//# sourceMappingURL=feedback.js.map
