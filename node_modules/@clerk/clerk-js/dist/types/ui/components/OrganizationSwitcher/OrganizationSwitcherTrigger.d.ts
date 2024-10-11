import { Button } from '../../customizables';
import type { PropsOfComponent } from '../../styledSystem';
type OrganizationSwitcherTriggerProps = PropsOfComponent<typeof Button> & {
    isOpen: boolean;
};
export declare const OrganizationSwitcherTrigger: import("react").ForwardRefExoticComponent<Omit<Omit<OrganizationSwitcherTriggerProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLElement>>;
export {};
