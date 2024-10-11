import { zxcvbnOptions, Options } from './Options';
import debounce from './debounce';
import { ZxcvbnResult } from './types';
export declare const zxcvbn: (password: string, userInputs?: (string | number)[]) => ZxcvbnResult;
export declare const zxcvbnAsync: (password: string, userInputs?: (string | number)[]) => Promise<ZxcvbnResult>;
export * from './types';
export { zxcvbnOptions, Options, debounce };
