import ky from "ky";

import { fetchData } from "./api";
import instance, { handleApiError } from "./instance";

import { ApiResponse, Asset, UserAssetsQuery } from "@/types";

const apiUrl = "https://qc.cex-partner-backend.vcex.network/v1/";

const apiRequestWithInHouseAuth = () =>
  instance.extend({
    prefixUrl: "",
  });

const fetchUserAssets = async () => {
  const response = await fetchData<ApiResponse<Asset>>("assets/all");
  return response.items;
};

const fetchUserSpotAssets = async (params: UserAssetsQuery) => {
  const path = `${apiUrl}simulator-partner/assets/spot`;

  try {
    const response: any = await apiRequestWithInHouseAuth()
      .post(path, {
        json: params,
      })
      .json();
    return response?.data?.assets;
  } catch (error) {
    console.error("API Error:", error);
    throw handleApiError(error, path);
  }
};

export { fetchUserAssets, fetchUserSpotAssets };
