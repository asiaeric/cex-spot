import { useEffect } from "react";

import { wsClient } from "@/CexSpotView";
import { WebSocketMessage } from "@/types/socket";
import TopicHelper from "@/ws/topic";

export const useLoginSubscription = ({ code }: { code: string }) => {
  useEffect(() => {
    const topic = TopicHelper.userLogin(code);
    const callback = (msg: WebSocketMessage) => {};
    wsClient.subscribe(topic, callback, "login");

    return () => {
      wsClient.unsubscribe(topic);
    };
  }, [code]);
};
