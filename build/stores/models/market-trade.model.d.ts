import { Action, Computed, Thunk } from "easy-peasy";
import { TradingMarket } from "../../types/trade";
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
export interface MarketTradesModel extends MarketTradeState, MarketTradeActions, MarketTradeComputed, MarketTradeThunks {
}
export declare const marketTradeModel: MarketTradesModel;
//# sourceMappingURL=market-trade.model.d.ts.map