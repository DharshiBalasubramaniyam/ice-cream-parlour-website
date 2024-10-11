interface IntersectionOptions extends IntersectionObserverInit {
    /** Only trigger the inView callback once */
    triggerOnce?: boolean;
    /** Call this function whenever the in view state changes */
    onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void;
}
/**
 * A custom React hook that provides the ability to track whether an element is in view
 * based on the IntersectionObserver API.
 *
 * @param {IntersectionOptions} params - IntersectionObserver configuration options.
 * @returns {{
 *   inView: boolean,
 *   ref: (element: HTMLElement | null) => void
 * }} An object containing the current inView status and a ref function to attach to the target element.
 */
export declare const useInView: (params: IntersectionOptions) => {
    inView: boolean;
    ref: (element: HTMLElement | null) => void;
};
export {};
