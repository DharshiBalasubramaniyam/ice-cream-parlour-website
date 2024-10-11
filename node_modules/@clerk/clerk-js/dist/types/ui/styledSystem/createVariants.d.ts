import type { InternalTheme, StyleRule } from './types';
type UnwrapBooleanVariant<T> = T extends 'true' | 'false' ? boolean : T;
type VariantDefinition = Record<string, StyleRule>;
type Variants = Record<string, VariantDefinition>;
type VariantNameToKeyMap<V> = {
    [key in keyof V]?: UnwrapBooleanVariant<keyof V[key]>;
};
type DefaultVariants<V> = VariantNameToKeyMap<V>;
type CompoundVariant<V> = {
    condition: VariantNameToKeyMap<V>;
    styles?: StyleRule;
};
type CreateVariantsConfig<V> = {
    base?: StyleRule;
    variants: V;
    compoundVariants?: Array<CompoundVariant<V>>;
    defaultVariants?: DefaultVariants<V>;
};
type ApplyVariants<T, V> = {
    (props?: VariantNameToKeyMap<V>): (theme: T) => StyleRule;
};
export type StyleVariants<T extends () => any> = Parameters<T>[0];
type CreateVariantsReturn<T, V extends Variants> = {
    applyVariants: ApplyVariants<T, V>;
    filterProps: <Props>(props: Props) => {
        [k in Exclude<keyof Props, keyof V>]: Props[k];
    };
};
interface CreateVariants {
    <P extends Record<string, any>, T = InternalTheme, V extends Variants = Variants>(param: (theme: T, props: P) => CreateVariantsConfig<V>): CreateVariantsReturn<T, V>;
}
export declare const createVariants: CreateVariants;
export {};
