import { Action, Thunk } from "easy-peasy";
import { TradingPair } from "@/types";
export interface TradingPairState {
    tradingPairs: Map<string, TradingPair>;
    currentPair: TradingPair | undefined;
    currentAggregation: number;
}
export interface TradingPairActions {
    setTradingPairs: Action<this, TradingPair[]>;
    setCurrentPair: Action<this, TradingPair>;
    setCurrentAggregation: Action<this, number>;
}
export interface TradingPairThunks {
    getTradingPairs: Thunk<this>;
}
export interface TradingPairModel extends TradingPairActions, TradingPairState, TradingPairThunks {
}
export declare const tradingPairModel: TradingPairModel;
//# sourceMappingURL=trading-pair.model.d.ts.map