import { Link } from '../customizables';
import type { PropsOfComponent } from '../styledSystem';
type RouterLinkProps = PropsOfComponent<typeof Link> & {
    to?: string;
};
export declare const RouterLink: (props: RouterLinkProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
