import { Order, OrderBookData, OrderBookPair, OrderSide } from "@/types";
export declare const roundToNearest: (value: number, ticketSize: number, type: OrderSide) => number;
export declare const groupByTicketSize: (orderBookData: OrderBookData, ticketSize: number, depth: number) => {
    asks: OrderBookPair[];
    bids: OrderBookPair[];
};
export declare function fillOrderBooks(array: OrderBookPair[], length?: number): OrderBookPair[];
export declare const numberSizeInput: (input: number, tickSize: number) => number;
export declare function checkInOpenOrders(type: OrderSide, openOrders: Order[], price: number, currentAggregation: number): boolean;
//# sourceMappingURL=OrderBookHelpers.d.ts.map