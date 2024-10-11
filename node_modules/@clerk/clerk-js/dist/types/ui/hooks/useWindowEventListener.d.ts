type EventType = keyof WindowEventMap;
export declare const useWindowEventListener: (eventOrEvents: EventType | EventType[] | undefined, cb: () => void) => void;
export {};
