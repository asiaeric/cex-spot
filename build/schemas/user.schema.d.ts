import { z } from "zod";
export declare const SignUpSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}, {
    email: string;
    password: string;
    firstName: string;
    lastName?: string | undefined;
}>;
export declare const SignInSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const UserSchema: z.ZodObject<{
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}, {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}>;
export declare const MembershipSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    title: string;
}, {
    id: number;
    title: string;
}>;
export declare const UserProfileSchema: z.ZodObject<{
    profileId: z.ZodString;
    name: z.ZodString;
    membership: z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        title: string;
    }, {
        id: number;
        title: string;
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    profileId: string;
    membership: {
        id: number;
        title: string;
    };
}, {
    name: string;
    profileId: string;
    membership: {
        id: number;
        title: string;
    };
}>;
//# sourceMappingURL=user.schema.d.ts.map