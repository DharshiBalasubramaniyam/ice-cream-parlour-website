import dateSplits from './dateSplits.esm.js';

const DATE_MAX_YEAR = 2050;
const DATE_MIN_YEAR = 1000;
const DATE_SPLITS = dateSplits;
const BRUTEFORCE_CARDINALITY = 10;
const MIN_GUESSES_BEFORE_GROWING_SEQUENCE = 10000;
const MIN_SUBMATCH_GUESSES_SINGLE_CHAR = 10;
const MIN_SUBMATCH_GUESSES_MULTI_CHAR = 50;
const MIN_YEAR_SPACE = 20;
// \xbf-\xdf is a range for almost all special uppercase letter like Ä and so on
const START_UPPER = /^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/;
const END_UPPER = /^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/;
// \xdf-\xff is a range for almost all special lowercase letter like ä and so on
const ALL_UPPER = /^[A-Z\xbf-\xdf]+$/;
const ALL_UPPER_INVERTED = /^[^a-z\xdf-\xff]+$/;
const ALL_LOWER = /^[a-z\xdf-\xff]+$/;
const ALL_LOWER_INVERTED = /^[^A-Z\xbf-\xdf]+$/;
const ONE_LOWER = /[a-z\xdf-\xff]/;
const ONE_UPPER = /[A-Z\xbf-\xdf]/;
const ALPHA_INVERTED = /[^A-Za-z\xbf-\xdf]/gi;
const ALL_DIGIT = /^\d+$/;
const REFERENCE_YEAR = new Date().getFullYear();
const REGEXEN = {
  recentYear: /19\d\d|200\d|201\d|202\d/g
};
/* Separators */
const SEPERATOR_CHARS = [' ', ',', ';', ':', '|', '/', '\\', '_', '.', '-'];
const SEPERATOR_CHAR_COUNT = SEPERATOR_CHARS.length;

export { ALL_DIGIT, ALL_LOWER, ALL_LOWER_INVERTED, ALL_UPPER, ALL_UPPER_INVERTED, ALPHA_INVERTED, BRUTEFORCE_CARDINALITY, DATE_MAX_YEAR, DATE_MIN_YEAR, DATE_SPLITS, END_UPPER, MIN_GUESSES_BEFORE_GROWING_SEQUENCE, MIN_SUBMATCH_GUESSES_MULTI_CHAR, MIN_SUBMATCH_GUESSES_SINGLE_CHAR, MIN_YEAR_SPACE, ONE_LOWER, ONE_UPPER, REFERENCE_YEAR, REGEXEN, SEPERATOR_CHARS, SEPERATOR_CHAR_COUNT, START_UPPER };
//# sourceMappingURL=const.esm.js.map
