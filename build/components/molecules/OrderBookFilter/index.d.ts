export declare enum OrderBookFilterType {
    ALL = "ALL",
    BID = "BID",
    ASK = "ASK"
}
interface OrderBookFilterProps {
    type: OrderBookFilterType;
    onChange: (filter: OrderBookFilterType) => void;
}
declare function OrderBookFilter({ type, onChange, }: OrderBookFilterProps): import("react/jsx-runtime").JSX.Element;
export default OrderBookFilter;
//# sourceMappingURL=index.d.ts.map