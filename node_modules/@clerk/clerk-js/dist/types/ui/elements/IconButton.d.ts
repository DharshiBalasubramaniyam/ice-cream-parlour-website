import { Button } from '../customizables';
import type { ElementDescriptor } from '../customizables/elementDescriptors';
import type { PropsOfComponent } from '../styledSystem';
export declare const IconButton: (props: PropsOfComponent<typeof Button> & {
    icon: React.ReactElement | React.ComponentType;
    "aria-label": string;
    iconElementDescriptor?: ElementDescriptor;
}) => import("@emotion/react/jsx-runtime").JSX.Element;
