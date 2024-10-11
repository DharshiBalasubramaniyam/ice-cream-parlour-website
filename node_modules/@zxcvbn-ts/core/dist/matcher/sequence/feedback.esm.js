import { zxcvbnOptions } from '../../Options.esm.js';

var sequenceMatcher = (() => {
  return {
    warning: zxcvbnOptions.translations.warnings.sequences,
    suggestions: [zxcvbnOptions.translations.suggestions.sequences]
  };
});

export { sequenceMatcher as default };
//# sourceMappingURL=feedback.esm.js.map
