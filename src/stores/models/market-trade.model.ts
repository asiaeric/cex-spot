// import { TradingMarket, PlaceTradingMarketType, WSTradingMarketData } from '@/types/schemas/order'
import { action, Action, computed, Computed, thunk, Thunk } from "easy-peasy";

import { fetchMarketTrading } from "@/services/trading";
import { TradingMarket } from "@/types/trade";

// import { parseWSTradingMarket } from '@/utils/helpers'

export interface MarketTradeState {
  marketTrades: TradingMarket[];
  loading: boolean;
}

export interface MarketTradeActions {
  setLoading: Action<this, boolean>;

  setMarketTrades: Action<this, TradingMarket[]>;
  addNewTradingMarket: Action<this, TradingMarket>;
  updateMarketTrades: Action<this, TradingMarket>;
}

export interface MarketTradeComputed {
  openTradingMarketCount: Computed<this, number>;
}

export interface MarketTradeThunks {
  getMarketTrades: Thunk<this, string>;
}

export interface MarketTradesModel
  extends MarketTradeState,
    MarketTradeActions,
    MarketTradeComputed,
    MarketTradeThunks {}

export const marketTradeModel: MarketTradesModel = {
  marketTrades: [],

  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  openTradingMarketCount: computed((state) => {
    return state.marketTrades.length;
  }),
  setMarketTrades: action((state, payload) => {
    state.marketTrades = payload;
  }),
  addNewTradingMarket: action((state, payload) => {
    state.marketTrades.unshift(payload);
  }),
  getMarketTrades: thunk(async (actions, payload) => {
    try {
      const params = { symbol: payload, size: 100 };
      const response = await fetchMarketTrading(params);
      actions.setMarketTrades(response);
    } catch (err) {
      //   const error = await handleKyError(err);
    }
  }),
  updateMarketTrades: action((state, payload: TradingMarket) => {
    if (!payload) return;

    state.marketTrades = [
      payload,
      ...state.marketTrades.slice(0, state.marketTrades.length - 1),
    ];
  }),
};
