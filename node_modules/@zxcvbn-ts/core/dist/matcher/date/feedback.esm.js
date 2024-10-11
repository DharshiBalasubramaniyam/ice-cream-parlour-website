import { zxcvbnOptions } from '../../Options.esm.js';

var dateMatcher = (() => {
  return {
    warning: zxcvbnOptions.translations.warnings.dates,
    suggestions: [zxcvbnOptions.translations.suggestions.dates]
  };
});

export { dateMatcher as default };
//# sourceMappingURL=feedback.esm.js.map
