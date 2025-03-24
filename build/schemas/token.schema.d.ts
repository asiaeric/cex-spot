import { z } from "zod";
export declare const InHouseTokenSchema: z.ZodObject<{
    token: z.ZodString;
    tplPartnerId: z.ZodString;
    tplToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    tplPartnerId: string;
    tplToken: string;
}, {
    token: string;
    tplPartnerId: string;
    tplToken: string;
}>;
export declare const PartnerTokenSchema: z.ZodObject<{
    accessToken: z.ZodString;
    refreshToken: z.ZodString;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    accessToken: string;
    refreshToken: string;
}, {
    type: string;
    accessToken: string;
    refreshToken: string;
}>;
//# sourceMappingURL=token.schema.d.ts.map