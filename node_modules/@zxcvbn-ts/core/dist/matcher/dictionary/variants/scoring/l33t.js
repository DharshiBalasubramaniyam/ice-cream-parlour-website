'use strict';

var utils = require('../../../../scoring/utils.js');

const countSubstring = (string, substring) => {
  let count = 0;
  let pos = string.indexOf(substring);
  while (pos >= 0) {
    count += 1;
    pos = string.indexOf(substring, pos + substring.length);
  }
  return count;
};
const getCounts = ({
  sub,
  token
}) => {
  // lower-case match.token before calculating: capitalization shouldn't affect l33t calc.
  const tokenLower = token.toLowerCase();
  // num of subbed chars
  const subbedCount = countSubstring(tokenLower, sub.substitution);
  // num of unsubbed chars
  const unsubbedCount = countSubstring(tokenLower, sub.letter);
  return {
    subbedCount,
    unsubbedCount
  };
};
var l33tVariant = (({
  l33t,
  subs,
  token
}) => {
  if (!l33t) {
    return 1;
  }
  let variations = 1;
  subs.forEach(sub => {
    const {
      subbedCount,
      unsubbedCount
    } = getCounts({
      sub,
      token
    });
    if (subbedCount === 0 || unsubbedCount === 0) {
      // for this sub, password is either fully subbed (444) or fully unsubbed (aaa)
      // treat that as doubling the space (attacker needs to try fully subbed chars in addition to
      // unsubbed.)
      variations *= 2;
    } else {
      // this case is similar to capitalization:
      // with aa44a, U = 3, S = 2, attacker needs to try unsubbed + one sub + two subs
      const p = Math.min(unsubbedCount, subbedCount);
      let possibilities = 0;
      for (let i = 1; i <= p; i += 1) {
        possibilities += utils.nCk(unsubbedCount + subbedCount, i);
      }
      variations *= possibilities;
    }
  });
  return variations;
});

module.exports = l33tVariant;
//# sourceMappingURL=l33t.js.map
