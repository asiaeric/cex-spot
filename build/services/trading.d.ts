import { TradingMarket } from "../types/trade";
declare const fetchMarketTrading: ({ symbol, size, }: {
    symbol: string;
    size: number;
}) => Promise<TradingMarket[]>;
export { fetchMarketTrading };
//# sourceMappingURL=trading.d.ts.map