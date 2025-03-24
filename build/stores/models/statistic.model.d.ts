import { Action, Thunk } from "easy-peasy";
import { Statistic } from "@/types";
export interface StatisticState {
    statistics: Map<string, Statistic>;
    error: string;
}
export interface StatisticActions {
    setStatistics: Action<this, Statistic[]>;
    setPairStatistic: Action<this, Statistic>;
    setError: Action<this, string>;
}
export interface StatisticThunks {
    getStatistics: Thunk<this>;
}
export interface StatisticModel extends StatisticState, StatisticActions, StatisticThunks {
}
export declare const statisticModel: StatisticModel;
//# sourceMappingURL=statistic.model.d.ts.map