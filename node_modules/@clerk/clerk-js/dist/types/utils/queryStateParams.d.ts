export declare const buildVirtualRouterUrl: ({ base, path }: {
    base: string;
    path: string | undefined;
}) => string;
export declare const readStateParam: () => any;
type SerializeAndAppendModalStateProps = {
    url: string;
    startPath?: string;
    currentPath?: string;
    componentName: string;
    socialProvider?: string;
};
export declare const appendModalState: ({ url, startPath, currentPath, componentName, socialProvider, }: SerializeAndAppendModalStateProps) => string;
export {};
