import { assetModel, AssetsModel } from "./asset.model";
import { ChartModel, chartModel } from "./chart.model";
import { FeeModel, feeModel } from "./fee.model";
import { MarketTradesModel, marketTradeModel } from "./market-trade.model";
import { OpenOrdersModel, openOrdersModel } from "./open-order.model";
import { orderBookModel, OrderBooksModel } from "./order-book.model";
import { orderHistoryModel, OrderHistoryModel } from "./order-history.model";
import { statisticModel, StatisticModel } from "./statistic.model";
import { TradingPairModel, tradingPairModel } from "./trading-pair.model";
import { UserModel, userModel } from "./user.model";
import { TradingModel, tradingModel } from "./trading.model";

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

export const model: Model = {
  assetModel,
  chartModel,
  statisticModel,
  tradingPairModel,
  feeModel,
  userModel,
  orderBookModel,
  openOrdersModel,
  marketTradeModel,
  orderHistoryModel,
  tradingModel,
};
