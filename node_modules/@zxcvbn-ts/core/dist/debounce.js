'use strict';

/**
 * @link https://davidwalsh.name/javascript-debounce-function
 * @param func needs to implement a function which is debounced
 * @param wait how long do you want to wait till the previous declared function is executed
 * @param isImmediate defines if you want to execute the function on the first execution or the last execution inside the time window. `true` for first and `false` for last.
 */
var debounce = ((func, wait, isImmediate) => {
  let timeout;
  return function debounce(...args) {
    const context = this;
    const later = () => {
      timeout = undefined;
      if (!isImmediate) {
        func.apply(context, args);
      }
    };
    const shouldCallNow = isImmediate && !timeout;
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
    if (shouldCallNow) {
      return func.apply(context, args);
    }
    return undefined;
  };
});

module.exports = debounce;
//# sourceMappingURL=debounce.js.map
