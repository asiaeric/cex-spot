import { z } from "zod";
export declare const TradingPairSchema: z.ZodObject<{
    id: z.ZodNumber;
    code: z.ZodString;
    name: z.ZodString;
    type: z.ZodLiteral<"CURRENCY_EXCHANGE_PAIR">;
    minBaseStep: z.ZodNumber;
    maxSize: z.ZodNumber;
    minTotal: z.ZodNumber;
    minQuoteStep: z.ZodNumber;
    status: z.ZodLiteral<"ACTIVE">;
    minPrice: z.ZodNumber;
    initPrice: z.ZodNumber;
    minQuantity: z.ZodNumber;
    baseAsset: z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
        decimals: z.ZodNumber;
        imgUrl: z.ZodString;
        precision: z.ZodNumber;
        balance: z.ZodOptional<z.ZodObject<{
            amount: z.ZodNumber;
            availableAmount: z.ZodNumber;
            inUseBalance: z.ZodNumber;
            type: z.ZodLiteral<"SPOT">;
        }, "strip", z.ZodTypeAny, {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        }, {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    }, {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    }>;
    quoteAsset: z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
        decimals: z.ZodNumber;
        imgUrl: z.ZodString;
        precision: z.ZodNumber;
        balance: z.ZodOptional<z.ZodObject<{
            amount: z.ZodNumber;
            availableAmount: z.ZodNumber;
            inUseBalance: z.ZodNumber;
            type: z.ZodLiteral<"SPOT">;
        }, "strip", z.ZodTypeAny, {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        }, {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    }, {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    id: number;
    type: "CURRENCY_EXCHANGE_PAIR";
    name: string;
    status: "ACTIVE";
    code: string;
    minBaseStep: number;
    maxSize: number;
    minTotal: number;
    minQuoteStep: number;
    minPrice: number;
    initPrice: number;
    minQuantity: number;
    baseAsset: {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    };
    quoteAsset: {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    };
}, {
    id: number;
    type: "CURRENCY_EXCHANGE_PAIR";
    name: string;
    status: "ACTIVE";
    code: string;
    minBaseStep: number;
    maxSize: number;
    minTotal: number;
    minQuoteStep: number;
    minPrice: number;
    initPrice: number;
    minQuantity: number;
    baseAsset: {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    };
    quoteAsset: {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    };
}>;
export declare const TradingPairListSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    code: z.ZodString;
    name: z.ZodString;
    type: z.ZodLiteral<"CURRENCY_EXCHANGE_PAIR">;
    minBaseStep: z.ZodNumber;
    maxSize: z.ZodNumber;
    minTotal: z.ZodNumber;
    minQuoteStep: z.ZodNumber;
    status: z.ZodLiteral<"ACTIVE">;
    minPrice: z.ZodNumber;
    initPrice: z.ZodNumber;
    minQuantity: z.ZodNumber;
    baseAsset: z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
        decimals: z.ZodNumber;
        imgUrl: z.ZodString;
        precision: z.ZodNumber;
        balance: z.ZodOptional<z.ZodObject<{
            amount: z.ZodNumber;
            availableAmount: z.ZodNumber;
            inUseBalance: z.ZodNumber;
            type: z.ZodLiteral<"SPOT">;
        }, "strip", z.ZodTypeAny, {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        }, {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    }, {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    }>;
    quoteAsset: z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
        decimals: z.ZodNumber;
        imgUrl: z.ZodString;
        precision: z.ZodNumber;
        balance: z.ZodOptional<z.ZodObject<{
            amount: z.ZodNumber;
            availableAmount: z.ZodNumber;
            inUseBalance: z.ZodNumber;
            type: z.ZodLiteral<"SPOT">;
        }, "strip", z.ZodTypeAny, {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        }, {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    }, {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    id: number;
    type: "CURRENCY_EXCHANGE_PAIR";
    name: string;
    status: "ACTIVE";
    code: string;
    minBaseStep: number;
    maxSize: number;
    minTotal: number;
    minQuoteStep: number;
    minPrice: number;
    initPrice: number;
    minQuantity: number;
    baseAsset: {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    };
    quoteAsset: {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    };
}, {
    id: number;
    type: "CURRENCY_EXCHANGE_PAIR";
    name: string;
    status: "ACTIVE";
    code: string;
    minBaseStep: number;
    maxSize: number;
    minTotal: number;
    minQuoteStep: number;
    minPrice: number;
    initPrice: number;
    minQuantity: number;
    baseAsset: {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    };
    quoteAsset: {
        name: string;
        code: string;
        decimals: number;
        imgUrl: string;
        precision: number;
        balance?: {
            type: "SPOT";
            amount: number;
            availableAmount: number;
            inUseBalance: number;
        } | undefined;
    };
}>, "many">;
//# sourceMappingURL=pair.schema.d.ts.map