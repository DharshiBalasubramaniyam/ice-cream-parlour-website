import { REFERENCE_YEAR, MIN_YEAR_SPACE } from '../../data/const.esm.js';

var dateMatcher = (({
  year,
  separator
}) => {
  // base guesses: (year distance from REFERENCE_YEAR) * num_days * num_years
  const yearSpace = Math.max(Math.abs(year - REFERENCE_YEAR), MIN_YEAR_SPACE);
  let guesses = yearSpace * 365;
  // add factor of 4 for separator selection (one of ~4 choices)
  if (separator) {
    guesses *= 4;
  }
  return guesses;
});

export { dateMatcher as default };
//# sourceMappingURL=scoring.esm.js.map
