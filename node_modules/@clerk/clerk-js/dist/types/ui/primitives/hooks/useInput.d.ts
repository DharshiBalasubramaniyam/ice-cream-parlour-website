import React from 'react';
export declare function useInput(callback: React.FormEventHandler<HTMLInputElement> | null | undefined): {
    onChange: React.FormEventHandler<HTMLInputElement>;
    ref: React.MutableRefObject<HTMLInputElement | null>;
};
