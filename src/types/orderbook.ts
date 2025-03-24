type OrderBookPair = [number, number];

type OrderBookQuery = {
  symbol: string;
  depth: number;
};

type OrderBookData = {
  asks: OrderBookPair[];
  bids: OrderBookPair[];
  e?: number;
};

export { OrderBookData, OrderBookQuery, OrderBookPair };
