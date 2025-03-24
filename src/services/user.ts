import { fetchData, postData } from "./api";
import instance, { handleApiError } from "./instance";

import {
  InHouseTokenSchema,
  PartnerTokenSchema,
  UserProfileSchema,
  UserSchema,
} from "@/schemas";
import store from "@/stores";
import { SignInDTO } from "@/types";

const apiUrl = "https://qc.cex-partner-backend.vcex.network/v1/";

const getHeaderConfig = () => {
  const { userModel, tradingPairModel } = store.getState();
  return {
    accessToken: userModel.user?.inHouseToken?.token,
    symbol: tradingPairModel.currentPair?.code,
  };
};

const apiRequestWithInHouseAuth = () =>
  instance.extend({
    prefixUrl: "",
    hooks: {
      beforeRequest: [
        async (request) => {
          const { accessToken } = getHeaderConfig();
          if (accessToken) {
            request.headers.set("Authorization", `Bearer ${accessToken}`); // Reset token
          }
        },
      ],
    },
  });

export const signIn = async (params: SignInDTO) => {
  const path = `${apiUrl}auth/login`;
  try {
    const response = await apiRequestWithInHouseAuth()
      .post(path, { json: params })
      .json();

    return InHouseTokenSchema.parse(response);
  } catch (error) {
    throw handleApiError(error, path);
  }
};

export const signUp = async (params: SignInDTO) => {
  try {
    const response = await apiRequestWithInHouseAuth()
      .post(`${apiUrl}auth/login`, { json: params })
      .json();

    return InHouseTokenSchema.parse(response);
  } catch (error) {
    console.error("Error signing in:", error);
    throw new Error("Failed to sign in. Please try again.");
  }
};

export const getMe = async () => {
  const path = `${apiUrl}auth/me`;
  try {
    const response = await apiRequestWithInHouseAuth().get(path).json();
    return UserSchema.parse(response);
  } catch (error) {
    throw handleApiError(error, path);
  }
};

export const authenticateUser = async (params: { encryptedToken: string }) => {
  const response = await postData<any>("iam/auth", params);
  return PartnerTokenSchema.parse(response);
};

export const getPartnerProfile = async () => {
  const response = await fetchData<any>("profiles/me");
  return UserProfileSchema.parse(response);
};
