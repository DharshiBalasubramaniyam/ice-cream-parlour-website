/**
 * Enforces that an array contains ALL keys of T
 */
export declare const containsAllOfType: <T>() => <U extends Readonly<T[]>>(array: U & ([T] extends [U[number]] ? unknown : "Invalid")) => U & ([T] extends [U[number]] ? unknown : "Invalid");
