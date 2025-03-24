import { useCallback, useEffect } from "react";

import { wsClient } from "@/CexSpotView";
import { useStoreActions } from "@/stores/hooks";
import { TradingMarket } from "@/types";
import { WebSocketMessage } from "@/types/socket";
import TopicHelper from "@/ws/topic";

export const useMarketTradeSubscription = (symbol: string) => {
  const { updateMarketTrades } = useStoreActions(
    (store) => store.marketTradeModel,
  );

  const mapTrade = useCallback((stats: any) => {
    const res = {
      id: stats.t,
      price: stats.p,
      quantity: stats.q,
      buyerMaker: stats.m,
      type: "MARKET",
      createdAt: stats.T,
      updatedAt: stats.e,
    } as TradingMarket;

    return res;
  }, []);

  useEffect(() => {
    if (!symbol) {
      return undefined;
    }
    const topic = TopicHelper.tradeMarket(symbol);
    const callback = (msg: WebSocketMessage) => {
      if (!msg.data) return;
      updateMarketTrades(mapTrade(msg.data));
    };

    wsClient.subscribe(topic, callback);

    return () => {
      wsClient.unsubscribe(topic);
    };
  }, [symbol]);
};
