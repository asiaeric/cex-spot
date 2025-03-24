import { z } from "zod";
export declare const KlineItemSchema: z.ZodObject<{
    timestamp: z.ZodNumber;
    open: z.ZodNumber;
    high: z.ZodNumber;
    low: z.ZodNumber;
    close: z.ZodNumber;
    volume: z.ZodNumber;
    turnover: z.ZodNumber;
    totalBase: z.ZodOptional<z.ZodNumber>;
    totalQuote: z.ZodOptional<z.ZodNumber>;
    numberOfTrades: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    turnover: number;
    totalBase?: number | undefined;
    totalQuote?: number | undefined;
    numberOfTrades?: number | undefined;
}, {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    turnover: number;
    totalBase?: number | undefined;
    totalQuote?: number | undefined;
    numberOfTrades?: number | undefined;
}>;
export declare const KlineArraySchema: z.ZodArray<z.ZodObject<{
    timestamp: z.ZodNumber;
    open: z.ZodNumber;
    high: z.ZodNumber;
    low: z.ZodNumber;
    close: z.ZodNumber;
    volume: z.ZodNumber;
    turnover: z.ZodNumber;
    totalBase: z.ZodOptional<z.ZodNumber>;
    totalQuote: z.ZodOptional<z.ZodNumber>;
    numberOfTrades: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    turnover: number;
    totalBase?: number | undefined;
    totalQuote?: number | undefined;
    numberOfTrades?: number | undefined;
}, {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    turnover: number;
    totalBase?: number | undefined;
    totalQuote?: number | undefined;
    numberOfTrades?: number | undefined;
}>, "many">;
//# sourceMappingURL=kline.schema.d.ts.map