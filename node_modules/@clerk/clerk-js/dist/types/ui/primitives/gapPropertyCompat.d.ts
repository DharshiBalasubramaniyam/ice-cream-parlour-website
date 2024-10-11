export declare const createFlexGapPropertyIosCompat: (val: string, dir: "col" | "row") => {
    '& > *:not([hidden]):not([style*="visibility: hidden"]) + *:not([hidden]):not([style*="visibility: hidden"])': {
        marginLeft: string | undefined;
        marginTop: string | undefined;
    };
    gap?: undefined;
} | {
    gap: string;
    '& > *:not([hidden]):not([style*="visibility: hidden"]) + *:not([hidden]):not([style*="visibility: hidden"])'?: undefined;
};
