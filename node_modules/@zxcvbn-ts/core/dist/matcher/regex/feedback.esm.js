import { zxcvbnOptions } from '../../Options.esm.js';

var regexMatcher = (match => {
  if (match.regexName === 'recentYear') {
    return {
      warning: zxcvbnOptions.translations.warnings.recentYears,
      suggestions: [zxcvbnOptions.translations.suggestions.recentYears, zxcvbnOptions.translations.suggestions.associatedYears]
    };
  }
  return {
    warning: null,
    suggestions: []
  };
});

export { regexMatcher as default };
//# sourceMappingURL=feedback.esm.js.map
