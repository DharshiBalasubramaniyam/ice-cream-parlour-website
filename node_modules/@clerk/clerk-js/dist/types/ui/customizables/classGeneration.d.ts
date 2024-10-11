import type { FlowMetadata } from '../elements/contexts';
import type { ElementDescriptor, ElementId } from './elementDescriptors';
import type { ParsedElements } from './parseAppearance';
type PropsWithState = Partial<Record<'isLoading' | 'isDisabled' | 'hasError' | 'isOpen' | 'isActive', any>> & Record<string, any>;
export declare const generateClassName: (parsedElements: ParsedElements, elemDescriptors: ElementDescriptor[], elemId: ElementId | undefined, props: PropsWithState | undefined) => {
    className: string;
    css: unknown[];
};
export declare const appendEmojiSeparator: (generatedCn: string, otherCn?: string) => string;
export declare const generateFlowClassname: (props: Pick<FlowMetadata, "flow">) => string;
export declare const generateFlowPartClassname: (props: FlowMetadata) => string;
export {};
