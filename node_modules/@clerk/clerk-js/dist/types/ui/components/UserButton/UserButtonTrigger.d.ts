import { Button } from '../../customizables';
import type { PropsOfComponent } from '../../styledSystem';
type UserButtonTriggerProps = PropsOfComponent<typeof Button> & {
    isOpen: boolean;
};
export declare const UserButtonTrigger: import("react").ForwardRefExoticComponent<Omit<Omit<UserButtonTriggerProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLElement>>;
export {};
