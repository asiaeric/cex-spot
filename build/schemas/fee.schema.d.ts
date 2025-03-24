import { z } from "zod";
export declare const FeeSchema: z.ZodObject<{
    symbolCode: z.ZodString;
    makerFee: z.ZodNumber;
    takerFee: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    symbolCode: string;
    makerFee: number;
    takerFee: number;
}, {
    symbolCode: string;
    makerFee: number;
    takerFee: number;
}>;
//# sourceMappingURL=fee.schema.d.ts.map