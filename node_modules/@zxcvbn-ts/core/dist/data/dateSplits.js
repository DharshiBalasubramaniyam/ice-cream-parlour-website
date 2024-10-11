'use strict';

var dateSplits = {
  4: [
  // for length-4 strings, eg 1191 or 9111, two ways to split:
  [1, 2], [2, 3] // 91 1 1
  ],

  5: [[1, 3], [2, 3],
  //  [2, 3], // 91 1 11    <- duplicate previous one
  [2, 4] // 91 11 1    <- New and must be added as bug fix
  ],

  6: [[1, 2], [2, 4], [4, 5] // 1991 1 1
  ],

  //  1111991
  7: [[1, 3], [2, 3], [4, 5], [4, 6] // 1991 11 1
  ],

  8: [[2, 4], [4, 6] // 1991 11 11
  ]
};

module.exports = dateSplits;
//# sourceMappingURL=dateSplits.js.map
