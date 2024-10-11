import { extend, sorted } from './helper.esm.js';
import MatchDate from './matcher/date/matching.esm.js';
import MatchDictionary from './matcher/dictionary/matching.esm.js';
import MatchRegex from './matcher/regex/matching.esm.js';
import MatchRepeat from './matcher/repeat/matching.esm.js';
import MatchSequence from './matcher/sequence/matching.esm.js';
import MatchSpatial from './matcher/spatial/matching.esm.js';
import MatchSeparator from './matcher/separator/matching.esm.js';
import { zxcvbnOptions } from './Options.esm.js';

class Matching {
  constructor() {
    this.matchers = {
      date: MatchDate,
      dictionary: MatchDictionary,
      regex: MatchRegex,
      // @ts-ignore => TODO resolve this type issue. This is because it is possible to be async
      repeat: MatchRepeat,
      sequence: MatchSequence,
      spatial: MatchSpatial,
      separator: MatchSeparator
    };
  }
  match(password) {
    const matches = [];
    const promises = [];
    const matchers = [...Object.keys(this.matchers), ...Object.keys(zxcvbnOptions.matchers)];
    matchers.forEach(key => {
      if (!this.matchers[key] && !zxcvbnOptions.matchers[key]) {
        return;
      }
      const Matcher = this.matchers[key] ? this.matchers[key] : zxcvbnOptions.matchers[key].Matching;
      const usedMatcher = new Matcher();
      const result = usedMatcher.match({
        password,
        omniMatch: this
      });
      if (result instanceof Promise) {
        result.then(response => {
          extend(matches, response);
        });
        promises.push(result);
      } else {
        extend(matches, result);
      }
    });
    if (promises.length > 0) {
      return new Promise((resolve, reject) => {
        Promise.all(promises).then(() => {
          resolve(sorted(matches));
        }).catch(error => {
          reject(error);
        });
      });
    }
    return sorted(matches);
  }
}

export { Matching as default };
//# sourceMappingURL=Matching.esm.js.map
