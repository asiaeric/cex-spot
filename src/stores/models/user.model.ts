import { Action, Thunk, action, thunk } from "easy-peasy";
import { t } from "i18next";

import { clearCredentials, storeCredentials } from "../secureMMKVStorage";

import { navigate, navigationRef, reset } from "@/navigators/NavigationUtils";
import {
  authenticateUser,
  getMe,
  getPartnerProfile,
  signIn,
  signUp,
} from "@/services/user";
import {
  InHouseToken,
  PartnerToken,
  SignInDTO,
  SignUpDTO,
  User,
  UserProfile,
} from "@/types";
import { RouteName } from "@/types/navigation";
import { showSuccessModal } from "@/utils/PopUpHelpers";

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

export interface UserModel extends UserState, UserActions, UserThunks {}

function handleLogin(params: SignInDTO) {
  storeCredentials(params.email, params.password);
  navigationRef.navigate(RouteName.Market);
}

function handleLogout() {
  clearCredentials();
  reset(0, [{ name: RouteName.SignIn }]);
}

export const userModel: UserModel = {
  user: {},
  loginError: "",
  signUpError: "",
  isSigning: false,
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  setIsSigning: action((state, payload) => {
    state.isSigning = payload;
  }),
  setLoginError: action((state, payload) => {
    state.loginError = payload;
  }),
  resetError: action((state) => {
    state.loginError = "";
    state.signUpError = "";
  }),
  setSignUpError: action((state, payload) => {
    state.signUpError = payload;
  }),
  logOut: action((state) => {
    state.user = undefined;
    state.loginError = "";
    state.signUpError = "";
    handleLogout();
  }),
  signIn: thunk(async (actions, payload) => {
    try {
      const loginData = await signIn(payload);
      actions.setUser({ inHouseToken: loginData });
      if (!loginData)
        throw new Error("Authentication failed: No auth data received.");
      const userData = await getMe();
      const authData = await authenticateUser({
        encryptedToken: loginData.tplToken,
      });
      const mergedUser = {
        inHouseToken: loginData,
        partnerToken: authData || {},
        me: userData || {},
      };
      actions.setUser(mergedUser);
      const partnerProfile = await getPartnerProfile();

      const finalUser = {
        inHouseToken: loginData,
        partnerToken: authData || {},
        me: userData || {},
        partnerProfile: partnerProfile || {},
      };
      actions.setUser(finalUser);
      actions.resetError();
      handleLogin(payload);
    } catch (err) {
      actions.setLoginError(
        err instanceof Error ? err.message : "Login failed",
      );
    }
  }),
  signUp: thunk(async (actions, payload) => {
    try {
      await signUp(payload);
      showSuccessModal(t("signup:createAccountSuccessfully"));
      navigate(RouteName.SignIn);
      actions.resetError();
    } catch (err) {
      actions.setSignUpError(err.code);
    }
  }),
};
