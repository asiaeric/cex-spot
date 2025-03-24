import { fetchData } from "./api";

import { ApiResponse } from "@/types";
import { TradingMarket } from "@/types/trade";

const fetchMarketTrading = async ({
  symbol,
  size,
}: {
  symbol: string;
  size: number;
}): Promise<TradingMarket[]> => {
  const response = await fetchData<ApiResponse<TradingMarket>>(
    `trades/${symbol}`,
    {
      symbol,
      size,
    },
  );

  return response.items;
};

export { fetchMarketTrading };
