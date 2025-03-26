import { Action, Thunk } from "easy-peasy";
import { Model } from ".";
import { FilterDate, ResponseTrading, Trading } from "../../types";
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
export interface TradingModel extends TradingState, TradingActions, TradingThunks {
}
export declare const tradingModel: TradingModel;
//# sourceMappingURL=trading.model.d.ts.map