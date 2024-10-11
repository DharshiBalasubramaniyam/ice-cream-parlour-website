'use strict';

const extend = (listToExtend, list) =>
// eslint-disable-next-line prefer-spread
listToExtend.push.apply(listToExtend, list);
// sort on i primary, j secondary
const sorted = matches => matches.sort((m1, m2) => m1.i - m2.i || m1.j - m2.j);
const buildRankedDictionary = orderedList => {
  const result = {};
  let counter = 1; // rank starts at 1, not 0
  orderedList.forEach(word => {
    result[word] = counter;
    counter += 1;
  });
  return result;
};

exports.buildRankedDictionary = buildRankedDictionary;
exports.extend = extend;
exports.sorted = sorted;
//# sourceMappingURL=helper.js.map
