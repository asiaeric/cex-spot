import { useCallback, useEffect } from "react";

import { wsClient } from "@/CexSpotView";
import { useStoreActions } from "@/stores/hooks";
import { OrderBookData } from "@/types";
import { WebSocketMessage } from "@/types/socket";
import TopicHelper from "@/ws/topic";

export const useOrderBookSubscription = ({ code }: { code: string }) => {
  const { updateOrderBooks } = useStoreActions((store) => store.orderBookModel);

  const transformDepthUpdate = useCallback((data: any): OrderBookData => {
    return {
      asks: data.a.map(([price, amount]: [string, string]) => [
        parseFloat(price),
        parseFloat(amount),
      ]),
      bids: data.b.map(([price, amount]: [string, string]) => [
        parseFloat(price),
        parseFloat(amount),
      ]),
      e: data.E,
    };
  }, []);

  useEffect(() => {
    if (!code) {
      return undefined;
    }

    const topic = TopicHelper.orderBookTopic(code);
    const callback = (msg: WebSocketMessage) => {
      if (msg.data) {
        const transformedData = transformDepthUpdate(msg.data);
        updateOrderBooks(transformedData as OrderBookData);
      }
    };

    wsClient.subscribe(topic, callback);

    return () => {
      wsClient.unsubscribe(topic);
    };
  }, [code]);
};
