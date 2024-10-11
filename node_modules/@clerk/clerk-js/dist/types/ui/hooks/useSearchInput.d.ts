type Unarray<T> = T extends Array<infer U> ? U : T;
type UseSearchInputProps<Items> = {
    items: Items;
    comparator: (term: string, item: Unarray<Items>, itemTerm?: string) => boolean;
    searchTermForItem?: (item: Unarray<Items>) => string;
};
type UseSearchInputReturn<Items> = {
    filteredItems: Items;
    searchInputProps: any;
};
export declare const useSearchInput: <Items extends Array<any>>(props: UseSearchInputProps<Items>) => UseSearchInputReturn<Items>;
export {};
