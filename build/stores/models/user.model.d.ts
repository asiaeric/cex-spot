import { Action, Thunk } from "easy-peasy";
import { InHouseToken, PartnerToken, SignInDTO, SignUpDTO, User, UserProfile } from "@/types";
type UserWithToken = {
    me: User;
    inHouseToken: InHouseToken;
    partnerToken: PartnerToken;
    partnerProfile: UserProfile;
};
export interface UserState {
    user: Partial<UserWithToken> | undefined;
    isSigning: boolean;
    loginError: string;
    signUpError: string;
}
export interface UserActions {
    setUser: Action<this, Partial<UserWithToken>>;
    setLoginError: Action<this, string>;
    setSignUpError: Action<this, string>;
    resetError: Action<this>;
    setIsSigning: Action<this, boolean>;
    logOut: Action<this>;
}
export interface UserThunks {
    signIn: Thunk<this, SignInDTO>;
    signUp: Thunk<this, SignUpDTO>;
}
export interface UserModel extends UserState, UserActions, UserThunks {
}
export declare const userModel: UserModel;
export {};
//# sourceMappingURL=user.model.d.ts.map