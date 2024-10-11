type Status = 'idle' | 'loading' | 'error';
export declare const useLoadingStatus: <Metadata>(initialState?: {
    status: Status;
    metadata?: Metadata | undefined;
}) => {
    status: Status;
    setIdle: (metadata?: Metadata) => void;
    setError: (metadata?: Metadata) => void;
    setLoading: (metadata?: Metadata) => void;
    loadingMetadata: Metadata | undefined;
    isLoading: boolean;
    isIdle: boolean;
};
export {};
