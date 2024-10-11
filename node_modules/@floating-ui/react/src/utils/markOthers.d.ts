type Undo = () => void;
export declare const supportsInert: () => boolean;
export declare function markOthers(avoidElements: Element[], ariaHidden?: boolean, inert?: boolean): Undo;
export {};
