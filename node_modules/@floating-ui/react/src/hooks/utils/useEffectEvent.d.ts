type AnyFunction = (...args: any[]) => any;
export declare function useEffectEvent<T extends AnyFunction>(callback?: T): T;
export {};
