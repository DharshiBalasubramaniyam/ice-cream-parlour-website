'use strict';

var _const = require('../../data/const.js');

var dateMatcher = (({
  year,
  separator
}) => {
  // base guesses: (year distance from REFERENCE_YEAR) * num_days * num_years
  const yearSpace = Math.max(Math.abs(year - _const.REFERENCE_YEAR), _const.MIN_YEAR_SPACE);
  let guesses = yearSpace * 365;
  // add factor of 4 for separator selection (one of ~4 choices)
  if (separator) {
    guesses *= 4;
  }
  return guesses;
});

module.exports = dateMatcher;
//# sourceMappingURL=scoring.js.map
