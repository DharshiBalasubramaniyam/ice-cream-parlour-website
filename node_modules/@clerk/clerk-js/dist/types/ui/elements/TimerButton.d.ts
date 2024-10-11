import { Button } from '../customizables';
import type { PropsOfComponent } from '../styledSystem';
type TimerButtonProps = PropsOfComponent<typeof Button> & {
    throttleTimeInSec?: number;
    startDisabled?: boolean;
    showCounter?: boolean;
};
export declare const TimerButton: (props: TimerButtonProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
