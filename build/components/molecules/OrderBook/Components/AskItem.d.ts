interface IAskItem {
    price: number;
    size: number;
    maxAsk: number;
    onPress?: (item: number) => void;
    isMarkDisplay?: boolean;
    markPosition?: "left" | "right";
}
declare const AskItem: import("react").MemoExoticComponent<({ price, size, maxAsk, onPress, isMarkDisplay, markPosition, }: IAskItem) => import("react/jsx-runtime").JSX.Element>;
export default AskItem;
//# sourceMappingURL=AskItem.d.ts.map