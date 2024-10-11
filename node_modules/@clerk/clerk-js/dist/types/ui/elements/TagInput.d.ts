import React from 'react';
import type { LocalizationKey } from '../customizables';
import { Flex } from '../customizables';
import type { PropsOfComponent } from '../styledSystem';
type Tag = string;
type TagInputProps = Pick<PropsOfComponent<typeof Flex>, 'sx'> & {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    validate?: (tag: Tag) => boolean;
    placeholder?: LocalizationKey | string;
    autoFocus?: boolean;
    validateUnsubmittedEmail?: (value: string) => void;
};
export declare const TagInput: (props: TagInputProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
