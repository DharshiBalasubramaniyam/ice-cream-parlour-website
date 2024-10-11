import type { ElementDescriptor } from '../customizables/elementDescriptors';
import type { PropsOfComponent } from '../styledSystem';
import { RouterLink } from './RouterLink';
type BackLinkProps = PropsOfComponent<typeof RouterLink> & {
    boxElementDescriptor?: ElementDescriptor;
    linkElementDescriptor?: ElementDescriptor;
};
export declare const BackLink: (props: BackLinkProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
