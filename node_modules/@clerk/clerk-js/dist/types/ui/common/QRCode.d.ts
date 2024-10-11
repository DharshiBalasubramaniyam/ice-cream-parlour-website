import { Flex } from '../customizables';
import type { PropsOfComponent } from '../styledSystem';
type QRCodeProps = PropsOfComponent<typeof Flex> & {
    url: string;
    size?: number;
};
export declare const QRCode: (props: QRCodeProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
