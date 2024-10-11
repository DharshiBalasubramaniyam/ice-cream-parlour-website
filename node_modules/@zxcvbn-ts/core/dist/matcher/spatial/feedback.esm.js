import { zxcvbnOptions } from '../../Options.esm.js';

var spatialMatcher = (match => {
  let warning = zxcvbnOptions.translations.warnings.keyPattern;
  if (match.turns === 1) {
    warning = zxcvbnOptions.translations.warnings.straightRow;
  }
  return {
    warning,
    suggestions: [zxcvbnOptions.translations.suggestions.longerKeyboardPattern]
  };
});

export { spatialMatcher as default };
//# sourceMappingURL=feedback.esm.js.map
