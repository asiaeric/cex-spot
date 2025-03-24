import { action, Action, thunk, Thunk } from "easy-peasy";
import { Model } from ".";
import { initialFilter } from "@/constants";
import { FilterDate, ResponseTrading, Trading } from "@/types";

export interface TradingState {
  filters: FilterDate;

  trading: Trading[];
  tradeLoading: boolean;
  tradeRefreshing: boolean;
  tradePage: number;
  tradeTotalPages: number;
}

export interface TradingActions {
  setFilters: Action<this, FilterDate>;

  setTrading: Action<this, ResponseTrading>;
  setTradeLoading: Action<this, boolean>;
  setTradeRefreshing: Action<this, boolean>;
  appendTrading: Action<this, Trading[]>;
}

export interface TradingThunks {
  getTrading: Thunk<this>;
  loadmoreTrading: Thunk<this, undefined, any, Model>;
  refreshTrading: Thunk<this, undefined, any, Model>;
  silentRefreshTrading: Thunk<this, undefined, any, Model>;
}

export interface TradingModel
  extends TradingState,
    TradingActions,
    TradingThunks {}

export const tradingModel: TradingModel = {
  filters: initialFilter,

  trading: [],
  tradeLoading: false,
  tradeRefreshing: false,
  tradePage: 1,
  tradeTotalPages: 0,

  setFilters: action((state, payload) => {
    state.tradePage = 1;
    state.filters = payload;
  }),

  setTradeLoading: action((state, payload) => {
    state.tradeLoading = payload;
  }),
  setTradeRefreshing: action((state, payload) => {
    state.tradeRefreshing = payload;
  }),
  setTrading: action((state, payload) => {
    // state.trading = payload.items;
    state.tradeTotalPages = payload.totalPages;
  }),
  appendTrading: action((state, payload) => {
    state.tradePage += 1;
    state.trading = [...state.trading, ...payload];
  }),
  getTrading: thunk(async (actions, _, { getState }) => {
    const { filters } = getState();
    actions.setTradeLoading(true);
    // const response = await fetchTrading({
    // 	page: 1,
    // 	startDate: filters.startDate,
    // 	endDate: filters.endDate,
    // })
    // actions.setTrading(response)
    actions.setTradeLoading(false);
  }),
  loadmoreTrading: thunk(async (actions, _, { getState }) => {
    const { tradePage, tradeTotalPages, filters } = getState();
    if (tradePage < tradeTotalPages) {
      const nextPage = tradePage + 1;
      actions.setTradeLoading(true);
      // const response = await fetchTrading({
      // 	page: nextPage,
      // 	startDate: filters.startDate,
      // 	endDate: filters.endDate,
      // })

      // actions.appendTrading(response.items)
      actions.setTradeLoading(false);
    }
  }),
  refreshTrading: thunk(async (actions, _, { getState }) => {
    actions.setTradeRefreshing(true);
    await actions.getTrading();
    actions.setTradeRefreshing(false);
    getState().tradePage = 1;
  }),
  silentRefreshTrading: thunk(async (actions, _, { getState }) => {
    await actions.getTrading();
    getState().tradePage = 1;
  }),
};
