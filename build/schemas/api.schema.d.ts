import { z } from "zod";
export declare const ApiResponseSchema: <T extends z.ZodTypeAny>(itemSchema: T) => z.ZodObject<{
    page: z.ZodNumber;
    size: z.ZodNumber;
    totalItems: z.ZodNumber;
    totalPages: z.ZodNumber;
    items: z.ZodArray<T, "many">;
}, "strip", z.ZodTypeAny, {
    size: number;
    page: number;
    totalItems: number;
    totalPages: number;
    items: T["_output"][];
}, {
    size: number;
    page: number;
    totalItems: number;
    totalPages: number;
    items: T["_input"][];
}>;
//# sourceMappingURL=api.schema.d.ts.map