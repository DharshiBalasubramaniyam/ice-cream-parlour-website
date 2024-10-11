import { Flex } from '../customizables';
import type { ElementDescriptor } from '../customizables/elementDescriptors';
import type { InternalTheme } from '../foundations';
import type { PropsOfComponent } from '../styledSystem';
type AvatarProps = PropsOfComponent<typeof Flex> & {
    size?: (theme: InternalTheme) => string | number;
    title?: string;
    initials?: string;
    imageUrl?: string | null;
    imageFetchSize?: number;
    rounded?: boolean;
    boxElementDescriptor?: ElementDescriptor;
    imageElementDescriptor?: ElementDescriptor;
};
export declare const Avatar: (props: AvatarProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
