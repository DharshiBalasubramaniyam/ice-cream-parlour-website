declare const breakpoints: Readonly<{
    readonly xs: "21em";
    readonly sm: "30em";
    readonly md: "48em";
    readonly lg: "62em";
    readonly xl: "80em";
    readonly '2xl': "96em";
}>;
declare const deviceQueries: {
    readonly ios: "@supports (-webkit-touch-callout: none)";
};
export declare const mqu: Record<keyof typeof breakpoints | keyof typeof deviceQueries, string>;
export {};
