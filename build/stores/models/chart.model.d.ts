import { Action, Thunk } from "easy-peasy";
import { CandlestickData, Chart, ChartParams } from "../../types";
export interface ChartState {
    chartData: CandlestickData[];
    chartSignal: Chart | undefined;
    currentTimeQuery: string;
}
export interface ChartActions {
    updateChartSignal: Action<this, CandlestickData>;
    setChartHistory: Action<this, CandlestickData[]>;
    sendChartSignal: Action<this, Chart>;
    setCurrentTime: Action<this, string>;
    resetCurrentTimeQuery: Action<this>;
}
export interface ChartThunks {
    getChartHistory: Thunk<this, ChartParams>;
}
export interface ChartModel extends ChartState, ChartActions, ChartThunks {
}
export declare const chartModel: ChartModel;
//# sourceMappingURL=chart.model.d.ts.map