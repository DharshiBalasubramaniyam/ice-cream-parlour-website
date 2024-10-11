import autoAnimate from '../index.mjs';
import { createSignal, onMount } from 'solid-js';

const createAutoAnimate = (options = {}) => {
    const [element, setElement] = createSignal(null);
    let controller;
    // Will help us set enabled even before the element is mounted
    let active = true;
    onMount(() => {
        const el = element();
        if (el) {
            controller = autoAnimate(el, options);
            if (active)
                controller.enable();
            else
                controller.disable();
        }
    });
    const setEnabled = (enabled) => {
        active = enabled;
        if (controller) {
            enabled ? controller.enable() : controller.disable();
        }
    };
    return [setElement, setEnabled];
};
const createAutoAnimateDirective = () => {
    return (el, options) => {
        let optionsValue = options();
        let resolvedOptions = {};
        if (optionsValue !== true)
            resolvedOptions = optionsValue;
        autoAnimate(el, resolvedOptions);
    };
};

export { createAutoAnimate, createAutoAnimateDirective };
