export type Procedure = (...args: any[]) => void;
/**
 * @link https://davidwalsh.name/javascript-debounce-function
 * @param func needs to implement a function which is debounced
 * @param wait how long do you want to wait till the previous declared function is executed
 * @param isImmediate defines if you want to execute the function on the first execution or the last execution inside the time window. `true` for first and `false` for last.
 */
declare const _default: <F extends Procedure>(func: F, wait: number, isImmediate?: boolean) => (this: ThisParameterType<F>, ...args: Parameters<F>) => void;
export default _default;
