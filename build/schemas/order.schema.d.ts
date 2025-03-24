import { z } from "zod";
export declare const OrderBookPairSchema: z.ZodObject<{
    price: z.ZodNumber;
    amount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    amount: number;
    price: number;
}, {
    amount: number;
    price: number;
}>;
export declare const OrderBookDataSchema: z.ZodObject<{
    bids: z.ZodArray<z.ZodObject<{
        price: z.ZodNumber;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        amount: number;
        price: number;
    }, {
        amount: number;
        price: number;
    }>, "many">;
    asks: z.ZodArray<z.ZodObject<{
        price: z.ZodNumber;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        amount: number;
        price: number;
    }, {
        amount: number;
        price: number;
    }>, "many">;
    e: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    bids: {
        amount: number;
        price: number;
    }[];
    asks: {
        amount: number;
        price: number;
    }[];
    e?: number | undefined;
}, {
    bids: {
        amount: number;
        price: number;
    }[];
    asks: {
        amount: number;
        price: number;
    }[];
    e?: number | undefined;
}>;
//# sourceMappingURL=order.schema.d.ts.map