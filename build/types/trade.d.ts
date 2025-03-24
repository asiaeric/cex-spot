import { OrderType, OrderSide } from "./order";
export type TradeItem = {
    price: number;
    matchingPrice: number;
    quantity: number;
    type: string;
    action: string;
    createdAt: string;
};
export type TradingMarket = {
    id: number;
    price: number;
    quantity: number;
    side: OrderSide;
    type: OrderType;
    createdAt: string;
    updatedAt: string;
    buyerMaker: boolean;
};
export type TradingStatistics = {
    symbolName: string;
    symbolCode: string;
    lastPrice: number;
    priceChange: number;
    percentPriceChange: number;
    volumeInBase: number;
    volumeInQuote: number;
    baseCurrency: string;
    quoteCurrency: string;
    close: number;
    high: number;
    low: number;
    precision: number;
};
export type TradeHistoryParams = {
    orderIds?: string[];
    symbolCode?: string;
    type?: string;
    side?: OrderSide;
    role?: string;
    fromDate?: string;
    toDate?: string;
    size?: number;
    page?: number;
    sortBy?: string;
    sortDirection?: "ASC" | "DESC";
};
export type Trade = {
    id: number;
    orderId?: string;
    symbolCode: string;
    symbolName: string;
    side: OrderSide;
    type: OrderType;
    price: number;
    quantity: number;
    fee: number;
    feeAsset: string;
    role: string;
    baseAsset: string;
    quoteAsset: string;
    baseTokenScale: number;
    quoteTokenScale: number;
    createdAt: string;
    updatedAt?: string;
};
//# sourceMappingURL=trade.d.ts.map