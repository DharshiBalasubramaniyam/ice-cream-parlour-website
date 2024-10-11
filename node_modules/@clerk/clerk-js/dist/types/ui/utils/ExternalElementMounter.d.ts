type ExternalElementMounterProps = {
    mount: (el: HTMLDivElement) => void;
    unmount: (el?: HTMLDivElement) => void;
};
export declare const ExternalElementMounter: ({ mount, unmount, ...rest }: ExternalElementMounterProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
