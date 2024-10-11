'use strict';

var adjacencyGraphs$1 = require('./adjacencyGraphs.json.js');
var diceware = require('./diceware.json.js');
var passwords = require('./passwords.json.js');

const dictionary = {
  diceware,
  passwords
};
// reinit the variable because the typescript compile will otherwise just reexport the json file which will break as it's a json file
const adjacencyGraphs = adjacencyGraphs$1;

exports.adjacencyGraphs = adjacencyGraphs;
exports.dictionary = dictionary;
//# sourceMappingURL=index.js.map
