'use strict';

var fastestLevenshtein = require('fastest-levenshtein');

const getUsedThreshold = (password, entry, threshold) => {
  const isPasswordToShort = password.length <= entry.length;
  const isThresholdLongerThanPassword = password.length <= threshold;
  const shouldUsePasswordLength = isPasswordToShort || isThresholdLongerThanPassword;
  // if password is too small use the password length divided by 4 while the threshold needs to be at least 1
  return shouldUsePasswordLength ? Math.ceil(password.length / 4) : threshold;
};
const findLevenshteinDistance = (password, rankedDictionary, threshold) => {
  let foundDistance = 0;
  const found = Object.keys(rankedDictionary).find(entry => {
    const usedThreshold = getUsedThreshold(password, entry, threshold);
    if (Math.abs(password.length - entry.length) > usedThreshold) {
      return false;
    }
    const foundEntryDistance = fastestLevenshtein.distance(password, entry);
    const isInThreshold = foundEntryDistance <= usedThreshold;
    if (isInThreshold) {
      foundDistance = foundEntryDistance;
    }
    return isInThreshold;
  });
  if (found) {
    return {
      levenshteinDistance: foundDistance,
      levenshteinDistanceEntry: found
    };
  }
  return {};
};

module.exports = findLevenshteinDistance;
//# sourceMappingURL=levenshtein.js.map
