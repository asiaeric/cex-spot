interface IBidItem {
    price: number;
    size: number;
    maxBid: number;
    onPress?: (item: number) => void;
    isReverse?: boolean;
    isMarkDisplay?: boolean;
}
declare const BidItem: import("react").MemoExoticComponent<({ price, size, maxBid, isReverse, onPress, isMarkDisplay }: IBidItem) => import("react/jsx-runtime").JSX.Element>;
export default BidItem;
//# sourceMappingURL=BidItem.d.ts.map