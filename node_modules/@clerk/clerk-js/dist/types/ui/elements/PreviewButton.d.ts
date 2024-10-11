import { Button, Icon } from '../customizables';
import type { PropsOfComponent } from '../styledSystem';
type PreviewButtonProps = Omit<PropsOfComponent<typeof Button>, 'icon'> & {
    icon?: React.ComponentType;
    iconProps?: Omit<PropsOfComponent<typeof Icon>, 'icon'>;
    showIconOnHover?: boolean;
};
export declare const PreviewButton: (props: PreviewButtonProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
