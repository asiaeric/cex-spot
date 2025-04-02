import { useEffect } from "react";

import { wsClient } from "@/CexSpotView";
import { useStoreActions } from "@/stores/hooks";
import { WebSocketMessage } from "@/types/socket";
import TopicHelper from "@/ws/topic";

export const useOrderSubscription = () => {
  const { updateOpenOrders } = useStoreActions(
    (store) => store.openOrdersModel,
  );
  const { updateOrderHistory } = useStoreActions(
    (store) => store.orderHistoryModel,
  );
  useEffect(() => {
    const topic = TopicHelper.userOrders();
    const callback = (msg: WebSocketMessage) => {
      if (msg.data && msg.data.e === "orderUpdate") {
        updateOpenOrders(msg.data);
        updateOrderHistory(msg);
      }
    };

    wsClient.subscribe(topic, callback);

    return () => {
      wsClient.unsubscribe(topic);
    };
  }, []);
};
