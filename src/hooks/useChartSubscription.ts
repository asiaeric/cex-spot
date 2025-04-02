import { useEffect, useCallback } from "react";

import { wsClient } from "@/CexSpotModule";
import { CandlestickData } from "@/types";
import { WebSocketMessage } from "@/types/socket";
import TopicHelper from "@/ws/topic";

export const useChartSubscription = ({
  chartStatus,
  code,
  interval,
  action,
}: {
  chartStatus: boolean;
  code: string;
  interval: string;
  action: (data: CandlestickData) => void;
}) => {
  const callback = useCallback(
    (msg: WebSocketMessage) => {
      try {
        const item = msg.data?.k;
        if (!item) return;

        const candlestickData: CandlestickData = {
          time: (item.t ?? 0) / 1000,
          open: item.o ?? 0,
          high: item.h ?? 0,
          low: item.l ?? 0,
          close: item.c ?? 0,
        };
        action(candlestickData);
      } catch (err) {
        console.error("Error in useChartSubscription", err);
      }
    },
    [action], // ✅ Ensures `callback` updates when `action` changes
  );

  useEffect(() => {
    if (!chartStatus || !code || !interval) return;

    const topic = TopicHelper.chartTopic({ code, interval });
    wsClient.subscribe(topic, callback);

    return () => {
      wsClient.unsubscribe(topic);
    };
  }, [chartStatus, code, interval, callback]);
};
