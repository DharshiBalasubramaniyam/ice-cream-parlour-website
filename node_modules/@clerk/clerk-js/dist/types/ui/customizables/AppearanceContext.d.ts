import React from 'react';
import type { AppearanceCascade, ParsedAppearance } from './parseAppearance';
declare const useAppearance: () => ParsedAppearance;
type AppearanceProviderProps = React.PropsWithChildren<AppearanceCascade>;
declare const AppearanceProvider: (props: AppearanceProviderProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export { AppearanceProvider, useAppearance };
