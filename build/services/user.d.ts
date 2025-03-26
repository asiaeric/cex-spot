import { SignInDTO } from "../types";
export declare const signIn: (params: SignInDTO) => Promise<{
    token: string;
    tplPartnerId: string;
    tplToken: string;
}>;
export declare const signUp: (params: SignInDTO) => Promise<{
    token: string;
    tplPartnerId: string;
    tplToken: string;
}>;
export declare const getMe: () => Promise<{
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}>;
export declare const authenticateUser: (params: {
    encryptedToken: string;
}) => Promise<{
    type: string;
    accessToken: string;
    refreshToken: string;
}>;
export declare const getPartnerProfile: () => Promise<{
    name: string;
    profileId: string;
    membership: {
        id: number;
        title: string;
    };
}>;
//# sourceMappingURL=user.d.ts.map