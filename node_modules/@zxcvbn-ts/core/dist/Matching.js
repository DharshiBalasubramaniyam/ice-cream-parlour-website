'use strict';

var helper = require('./helper.js');
var matching = require('./matcher/date/matching.js');
var matching$1 = require('./matcher/dictionary/matching.js');
var matching$2 = require('./matcher/regex/matching.js');
var matching$3 = require('./matcher/repeat/matching.js');
var matching$4 = require('./matcher/sequence/matching.js');
var matching$5 = require('./matcher/spatial/matching.js');
var matching$6 = require('./matcher/separator/matching.js');
var Options = require('./Options.js');

class Matching {
  constructor() {
    this.matchers = {
      date: matching,
      dictionary: matching$1,
      regex: matching$2,
      // @ts-ignore => TODO resolve this type issue. This is because it is possible to be async
      repeat: matching$3,
      sequence: matching$4,
      spatial: matching$5,
      separator: matching$6
    };
  }
  match(password) {
    const matches = [];
    const promises = [];
    const matchers = [...Object.keys(this.matchers), ...Object.keys(Options.zxcvbnOptions.matchers)];
    matchers.forEach(key => {
      if (!this.matchers[key] && !Options.zxcvbnOptions.matchers[key]) {
        return;
      }
      const Matcher = this.matchers[key] ? this.matchers[key] : Options.zxcvbnOptions.matchers[key].Matching;
      const usedMatcher = new Matcher();
      const result = usedMatcher.match({
        password,
        omniMatch: this
      });
      if (result instanceof Promise) {
        result.then(response => {
          helper.extend(matches, response);
        });
        promises.push(result);
      } else {
        helper.extend(matches, result);
      }
    });
    if (promises.length > 0) {
      return new Promise((resolve, reject) => {
        Promise.all(promises).then(() => {
          resolve(helper.sorted(matches));
        }).catch(error => {
          reject(error);
        });
      });
    }
    return helper.sorted(matches);
  }
}

module.exports = Matching;
//# sourceMappingURL=Matching.js.map
