import React from 'react';
import type { UserMembershipListProps } from './UserMembershipList';
export interface OrganizationActionListProps extends UserMembershipListProps {
    onCreateOrganizationClick: React.MouseEventHandler;
}
export declare const OrganizationActionList: (props: OrganizationActionListProps) => import("@emotion/react/jsx-runtime").JSX.Element;
