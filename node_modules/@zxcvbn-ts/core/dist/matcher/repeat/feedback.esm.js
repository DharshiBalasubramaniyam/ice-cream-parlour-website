import { zxcvbnOptions } from '../../Options.esm.js';

var repeatMatcher = (match => {
  let warning = zxcvbnOptions.translations.warnings.extendedRepeat;
  if (match.baseToken.length === 1) {
    warning = zxcvbnOptions.translations.warnings.simpleRepeat;
  }
  return {
    warning,
    suggestions: [zxcvbnOptions.translations.suggestions.repeated]
  };
});

export { repeatMatcher as default };
//# sourceMappingURL=feedback.esm.js.map
