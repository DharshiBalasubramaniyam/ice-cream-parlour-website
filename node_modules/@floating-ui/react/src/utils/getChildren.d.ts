import type { FloatingNodeType, ReferenceType } from '../types';
export declare function getChildren<RT extends ReferenceType = ReferenceType>(nodes: Array<FloatingNodeType<RT>>, id: string | undefined): FloatingNodeType<RT>[];
export declare function getDeepestNode<RT extends ReferenceType = ReferenceType>(nodes: Array<FloatingNodeType<RT>>, id: string | undefined): FloatingNodeType<RT> | undefined;
