import { Flex, Icon } from '../customizables';
import type { ElementDescriptor } from '../customizables/elementDescriptors';
import type { PropsOfComponent } from '../styledSystem';
type IconCircleProps = Pick<PropsOfComponent<typeof Icon>, 'icon'> & PropsOfComponent<typeof Flex> & {
    boxElementDescriptor?: ElementDescriptor;
    iconElementDescriptor?: ElementDescriptor;
};
export declare const IconCircle: (props: IconCircleProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
