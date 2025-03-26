import { Action, Computed, Thunk } from "easy-peasy";
import { Model } from ".";
import { OrderBookData, OrderBookQuery, OrderBookPair } from "../../types";
export interface OrderBookState {
    rawOrderBookData: OrderBookData;
    orderBookLoading: boolean;
}
export interface OrderBookActions {
    setRawOrderBookData: Action<this, OrderBookData>;
    setOrderBookLoading: Action<this, boolean>;
    updateOrderBooks: Action<this, OrderBookData>;
}
export interface OrderBookComputed {
    maxAsk: Computed<this, number>;
    maxBid: Computed<this, number>;
    asks: Computed<this, OrderBookPair[], Model>;
    bids: Computed<this, OrderBookPair[], Model>;
}
export interface OrderBookThunks {
    getOrderBooks: Thunk<this, OrderBookQuery>;
}
export interface OrderBooksModel extends OrderBookState, OrderBookActions, OrderBookComputed, OrderBookThunks {
}
export declare const orderBookModel: OrderBooksModel;
//# sourceMappingURL=order-book.model.d.ts.map