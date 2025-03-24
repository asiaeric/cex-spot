import { z } from "zod";
export declare const BalanceSchema: z.ZodObject<{
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
}>;
export declare const AssetSchema: z.ZodObject<{
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
//# sourceMappingURL=asset.schema.d.ts.map