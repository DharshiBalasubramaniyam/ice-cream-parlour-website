import { REGEXEN } from '../../data/const.esm.js';
import { sorted } from '../../helper.esm.js';

/*
 * -------------------------------------------------------------------------------
 *  regex matching ---------------------------------------------------------------
 * -------------------------------------------------------------------------------
 */
class MatchRegex {
  match({
    password,
    regexes = REGEXEN
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
    return sorted(matches);
  }
}

export { MatchRegex as default };
//# sourceMappingURL=matching.esm.js.map
