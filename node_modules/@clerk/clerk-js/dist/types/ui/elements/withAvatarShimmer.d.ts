import React from 'react';
import type { ThemableCssProp } from '../styledSystem';
/**
 * This HOC is used to add the hover selector for the avatar shimmer effect to its immediate child.
 * It is used since we might want to add the selector to a different element than the avatar itself,
 * for example in the <OrganizationSwitcher/>
 */
export declare const withAvatarShimmer: <T extends {
    sx?: ThemableCssProp;
}>(Component: React.ComponentType<T>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<T> & React.RefAttributes<HTMLElement>>;
