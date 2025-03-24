import { fetchData } from "./api";

import { KlineArraySchema } from "@/schemas";
import { CandlestickData, ChartQuery, KlineItem } from "@/types";

export const fetchChartHistory = async (
  params: ChartQuery,
): Promise<CandlestickData[]> => {
  const response = await fetchData("chart/klines", params);
  const json = Array.isArray(response) ? response : [];
  const finalRes: KlineItem[] = [];
  if (json.length) {
    json.forEach((element: any) => {
      const [
        openTime,
        open,
        high,
        low,
        close,
        volume,
        closeTime,
        totalBase,
        numberOfTrades,
        totalQuote,
      ] = element;
      const turnover =
        ((Number(open) + Number(high) + Number(low) + Number(close)) / 4) *
        Number(volume);
      finalRes.push({
        open: Number(open),
        high: Number(high),
        low: Number(low),
        close: Number(close),
        volume: Number(volume),
        turnover,
        timestamp: openTime,
        totalBase: Number(totalBase),
        totalQuote: Number(totalQuote),
        numberOfTrades: Number(numberOfTrades),
      });
    });
  }
  // Validate with Zod schema
  const validatedData = KlineArraySchema.parse(finalRes);

  // Convert KlineItem[] → CandlestickData[]
  return validatedData.map((item) => ({
    time: Math.floor(item.timestamp / 1000), // Convert ms to seconds
    open: item.open,
    high: item.high,
    low: item.low,
    close: item.close,
  }));
};
