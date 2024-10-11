import Matching from './Matching.esm.js';
import scoring from './scoring/index.esm.js';
import TimeEstimates from './TimeEstimates.esm.js';
import Feedback from './Feedback.esm.js';
import { zxcvbnOptions } from './Options.esm.js';
export { Options } from './Options.esm.js';
export { default as debounce } from './debounce.esm.js';

const time = () => new Date().getTime();
const createReturnValue = (resolvedMatches, password, start) => {
  const feedback = new Feedback();
  const timeEstimates = new TimeEstimates();
  const matchSequence = scoring.mostGuessableMatchSequence(password, resolvedMatches);
  const calcTime = time() - start;
  const attackTimes = timeEstimates.estimateAttackTimes(matchSequence.guesses);
  return {
    calcTime,
    ...matchSequence,
    ...attackTimes,
    feedback: feedback.getFeedback(attackTimes.score, matchSequence.sequence)
  };
};
const main = (password, userInputs) => {
  if (userInputs) {
    zxcvbnOptions.extendUserInputsDictionary(userInputs);
  }
  const matching = new Matching();
  return matching.match(password);
};
const zxcvbn = (password, userInputs) => {
  const start = time();
  const matches = main(password, userInputs);
  if (matches instanceof Promise) {
    throw new Error('You are using a Promised matcher, please use `zxcvbnAsync` for it.');
  }
  return createReturnValue(matches, password, start);
};
const zxcvbnAsync = async (password, userInputs) => {
  const usedPassword = password.substring(0, zxcvbnOptions.maxLength);
  const start = time();
  const matches = await main(usedPassword, userInputs);
  return createReturnValue(matches, usedPassword, start);
};

export { zxcvbn, zxcvbnAsync, zxcvbnOptions };
//# sourceMappingURL=index.esm.js.map
