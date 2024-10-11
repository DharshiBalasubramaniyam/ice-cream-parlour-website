import React from 'react';
export interface FieldState<T> {
    name: string;
    required?: boolean;
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
    error: string | undefined;
    setError: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export declare const buildRequest: (fieldStates: Array<FieldState<string>>) => Record<string, any>;
export declare const useFieldState: <T>(name: string, initialState: T) => FieldState<T>;
export declare const useFieldStateV2: <T>(name: string, required: boolean, initialState: T) => FieldState<T>;
