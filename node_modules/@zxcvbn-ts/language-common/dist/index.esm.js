import tempAdjacencyGraphs from './adjacencyGraphs.json.esm.js';
import diceware from './diceware.json.esm.js';
import passwords from './passwords.json.esm.js';

const dictionary = {
  diceware,
  passwords
};
// reinit the variable because the typescript compile will otherwise just reexport the json file which will break as it's a json file
const adjacencyGraphs = tempAdjacencyGraphs;

export { adjacencyGraphs, dictionary };
//# sourceMappingURL=index.esm.js.map
