import { action, Action, computed, Computed, thunk, Thunk } from "easy-peasy";

import { Model } from ".";

import { fetchOrderBooks } from "@/services/order";
import {
  OrderBookData,
  OrderBookQuery,
  OrderBookPair,
  OrderSide,
} from "@/types";
import { groupByTicketSize } from "@/utils/OrderBookHelpers";

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

export interface OrderBooksModel
  extends OrderBookState,
    OrderBookActions,
    OrderBookComputed,
    OrderBookThunks {}

export const orderBookModel: OrderBooksModel = {
  rawOrderBookData: { asks: [], bids: [], e: 0 },
  setRawOrderBookData: action((state, payload) => {
    state.rawOrderBookData = payload;
  }),
  asks: computed(
    [
      (state) => state.rawOrderBookData,
      (state, storeState) => storeState.tradingPairModel.currentAggregation,
    ],
    (rawOrderBookData, currentAggregation) => {
      const { asks } = groupByTicketSize(
        rawOrderBookData,
        currentAggregation,
        100,
      );
      return asks;
    },
  ),
  bids: computed(
    [
      (state) => state.rawOrderBookData,
      (state, storeState) => storeState.tradingPairModel.currentAggregation,
    ],
    (rawOrderBookData, currentAggregation) => {
      const { bids } = groupByTicketSize(
        rawOrderBookData,
        currentAggregation,
        100,
      );
      return bids;
    },
  ),
  maxAsk: computed((state) => {
    if (state.asks.length === 0) {
      return 0;
    }
    return Math.max(...state.asks.map((ask) => ask[1]));
  }),
  maxBid: computed((state) => {
    if (state.bids.length === 0) {
      return 0;
    }
    return Math.max(...state.bids.map((bid) => bid[1]));
  }),
  orderBookLoading: false,
  setOrderBookLoading: action((state, payload) => {
    state.orderBookLoading = payload;
  }),
  getOrderBooks: thunk(async (actions, payload) => {
    actions.setOrderBookLoading(true);
    const response = await fetchOrderBooks(payload);
    actions.setRawOrderBookData(response);
    actions.setOrderBookLoading(false);
  }),
  updateOrderBooks: action((state, payload) => {
    const depth = 1000;
    const updateOrders = (
      existingOrders: OrderBookPair[],
      newOrders: OrderBookPair[],
      orderType: OrderSide,
    ): OrderBookPair[] => {
      const updatedOrderMap = new Map(
        existingOrders.map(([price, qty]) => [Number(price), qty]),
      );

      newOrders.forEach(([price, quantity]) => {
        updatedOrderMap.set(Number(price), Number(quantity));
      });

      const sortedOrders = [...updatedOrderMap.entries()];
      sortedOrders.sort((a, b) =>
        orderType === OrderSide.ASKS ? a[0] - b[0] : b[0] - a[0],
      );

      return sortedOrders
        .filter(([, quantity]) => quantity > 0)
        .slice(0, depth);
    };

    state.rawOrderBookData = {
      asks: updateOrders(
        state.rawOrderBookData.asks,
        payload.asks,
        OrderSide.ASKS,
      ),
      bids: updateOrders(
        state.rawOrderBookData.bids,
        payload.bids,
        OrderSide.BIDS,
      ),
    };
  }),
};
