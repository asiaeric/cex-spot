import { AssetsModel } from "./asset.model";
import { ChartModel } from "./chart.model";
import { FeeModel } from "./fee.model";
import { MarketTradesModel } from "./market-trade.model";
import { OpenOrdersModel } from "./open-order.model";
import { OrderBooksModel } from "./order-book.model";
import { OrderHistoryModel } from "./order-history.model";
import { StatisticModel } from "./statistic.model";
import { TradingPairModel } from "./trading-pair.model";
import { UserModel } from "./user.model";
import { TradingModel } from "./trading.model";
export interface Model {
    assetModel: AssetsModel;
    chartModel: ChartModel;
    statisticModel: StatisticModel;
    tradingPairModel: TradingPairModel;
    feeModel: FeeModel;
    userModel: UserModel;
    orderBookModel: OrderBooksModel;
    openOrdersModel: OpenOrdersModel;
    marketTradeModel: MarketTradesModel;
    orderHistoryModel: OrderHistoryModel;
    tradingModel: TradingModel;
}
export declare const model: Model;
//# sourceMappingURL=index.d.ts.map