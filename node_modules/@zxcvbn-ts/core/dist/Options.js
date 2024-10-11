'use strict';

var helper = require('./helper.js');
var l33tTable = require('./data/l33tTable.js');
var translationKeys = require('./data/translationKeys.js');
var TrieNode = require('./matcher/dictionary/variants/matching/unmunger/TrieNode.js');
var l33tTableToTrieNode = require('./matcher/dictionary/variants/matching/unmunger/l33tTableToTrieNode.js');

class Options {
  constructor() {
    this.matchers = {};
    this.l33tTable = l33tTable;
    this.trieNodeRoot = l33tTableToTrieNode(l33tTable, new TrieNode());
    this.dictionary = {
      userInputs: []
    };
    this.rankedDictionaries = {};
    this.rankedDictionariesMaxWordSize = {};
    this.translations = translationKeys;
    this.graphs = {};
    this.useLevenshteinDistance = false;
    this.levenshteinThreshold = 2;
    this.l33tMaxSubstitutions = 100;
    this.maxLength = 256;
    this.setRankedDictionaries();
  }
  // eslint-disable-next-line max-statements,complexity
  setOptions(options = {}) {
    if (options.l33tTable) {
      this.l33tTable = options.l33tTable;
      this.trieNodeRoot = l33tTableToTrieNode(options.l33tTable, new TrieNode());
    }
    if (options.dictionary) {
      this.dictionary = options.dictionary;
      this.setRankedDictionaries();
    }
    if (options.translations) {
      this.setTranslations(options.translations);
    }
    if (options.graphs) {
      this.graphs = options.graphs;
    }
    if (options.useLevenshteinDistance !== undefined) {
      this.useLevenshteinDistance = options.useLevenshteinDistance;
    }
    if (options.levenshteinThreshold !== undefined) {
      this.levenshteinThreshold = options.levenshteinThreshold;
    }
    if (options.l33tMaxSubstitutions !== undefined) {
      this.l33tMaxSubstitutions = options.l33tMaxSubstitutions;
    }
    if (options.maxLength !== undefined) {
      this.maxLength = options.maxLength;
    }
  }
  setTranslations(translations) {
    if (this.checkCustomTranslations(translations)) {
      this.translations = translations;
    } else {
      throw new Error('Invalid translations object fallback to keys');
    }
  }
  checkCustomTranslations(translations) {
    let valid = true;
    Object.keys(translationKeys).forEach(type => {
      if (type in translations) {
        const translationType = type;
        Object.keys(translationKeys[translationType]).forEach(key => {
          if (!(key in translations[translationType])) {
            valid = false;
          }
        });
      } else {
        valid = false;
      }
    });
    return valid;
  }
  setRankedDictionaries() {
    const rankedDictionaries = {};
    const rankedDictionariesMaxWorkSize = {};
    Object.keys(this.dictionary).forEach(name => {
      rankedDictionaries[name] = helper.buildRankedDictionary(this.dictionary[name]);
      rankedDictionariesMaxWorkSize[name] = this.getRankedDictionariesMaxWordSize(this.dictionary[name]);
    });
    this.rankedDictionaries = rankedDictionaries;
    this.rankedDictionariesMaxWordSize = rankedDictionariesMaxWorkSize;
  }
  getRankedDictionariesMaxWordSize(list) {
    const data = list.map(el => {
      if (typeof el !== 'string') {
        return el.toString().length;
      }
      return el.length;
    });
    // do not use Math.max(...data) because it can result in max stack size error because every entry will be used as an argument
    if (data.length === 0) {
      return 0;
    }
    return data.reduce((a, b) => Math.max(a, b), -Infinity);
  }
  buildSanitizedRankedDictionary(list) {
    const sanitizedInputs = [];
    list.forEach(input => {
      const inputType = typeof input;
      if (inputType === 'string' || inputType === 'number' || inputType === 'boolean') {
        sanitizedInputs.push(input.toString().toLowerCase());
      }
    });
    return helper.buildRankedDictionary(sanitizedInputs);
  }
  extendUserInputsDictionary(dictionary) {
    if (!this.dictionary.userInputs) {
      this.dictionary.userInputs = [];
    }
    const newList = [...this.dictionary.userInputs, ...dictionary];
    this.rankedDictionaries.userInputs = this.buildSanitizedRankedDictionary(newList);
    this.rankedDictionariesMaxWordSize.userInputs = this.getRankedDictionariesMaxWordSize(newList);
  }
  addMatcher(name, matcher) {
    if (this.matchers[name]) {
      console.info(`Matcher ${name} already exists`);
    } else {
      this.matchers[name] = matcher;
    }
  }
}
const zxcvbnOptions = new Options();

exports.Options = Options;
exports.zxcvbnOptions = zxcvbnOptions;
//# sourceMappingURL=Options.js.map
