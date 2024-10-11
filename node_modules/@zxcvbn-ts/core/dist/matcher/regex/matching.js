'use strict';

var _const = require('../../data/const.js');
var helper = require('../../helper.js');

/*
 * -------------------------------------------------------------------------------
 *  regex matching ---------------------------------------------------------------
 * -------------------------------------------------------------------------------
 */
class MatchRegex {
  match({
    password,
    regexes = _const.REGEXEN
  }) {
    const matches = [];
    Object.keys(regexes).forEach(name => {
      const regex = regexes[name];
      regex.lastIndex = 0; // keeps regexMatch stateless
      let regexMatch;
      // eslint-disable-next-line no-cond-assign
      while (regexMatch = regex.exec(password)) {
        if (regexMatch) {
          const token = regexMatch[0];
          matches.push({
            pattern: 'regex',
            token,
            i: regexMatch.index,
            j: regexMatch.index + regexMatch[0].length - 1,
            regexName: name,
            regexMatch
          });
        }
      }
    });
    return helper.sorted(matches);
  }
}

module.exports = MatchRegex;
//# sourceMappingURL=matching.js.map
