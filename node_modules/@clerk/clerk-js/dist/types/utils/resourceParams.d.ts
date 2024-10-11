export declare function normalizeUnsafeMetadata<T extends Record<string, unknown> & {
    unsafeMetadata?: Record<string, unknown>;
}>(params: T): T & {
    unsafeMetadata?: string | undefined;
};
