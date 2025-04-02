import { useRef, useEffect } from "react";
import { FlashList } from "@shopify/flash-list";
import { useStoreState } from "@/stores/hooks";
import { OrderBookPair } from "@/types";
import { fillOrderBooks } from "@/utils/OrderBookHelpers";

const DEFAULT_DISPLAY = 40;

export const useOrderBookData = () => {
  const bidsRef = useRef<OrderBookPair[]>([]);
  const asksRef = useRef<OrderBookPair[]>([]);
  const listRef = useRef<FlashList<OrderBookPair> | null>(null); // Ref for FlashList

  const { bids, asks } = useStoreState((store) => store.orderBookModel);

  useEffect(() => {
    bidsRef.current = fillOrderBooks(bids, DEFAULT_DISPLAY);
    listRef.current?.forceUpdate(); // 🔥 Force FlashList to re-render
  }, [bids]);

  useEffect(() => {
    asksRef.current = fillOrderBooks(asks, DEFAULT_DISPLAY);
    listRef.current?.forceUpdate(); // 🔥 Force FlashList to re-render
  }, [asks]);

  return { bidsRef, asksRef, listRef };
};
