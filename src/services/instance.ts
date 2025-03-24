/* eslint-disable no-console */
import ky from "ky";

import { VI_LANG } from "@/constants";
import store from "@/stores";

const API_URL = "https://qc.chapi.vcex.network/api/v1/";

const getHeaderConfig = () => {
  const { userModel, tradingPairModel } = store.getState();
  return {
    accessToken: userModel.user?.partnerToken?.accessToken,
    symbol: tradingPairModel.currentPair?.code,
  };
};

const apiClient = ky.extend({
  prefixUrl: API_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
  retry: {
    limit: 2,
    statusCodes: [408, 500, 502, 503, 504],
  },
  hooks: {
    beforeRequest: [
      async (request) => {
        request.headers.set("X-Partner-Id", "1");
        request.headers.set("Accept-Language", VI_LANG);
        const { accessToken, symbol } = getHeaderConfig();
        if (symbol) {
          request.headers.set("X-Symbol", symbol);
        }
        if (accessToken) {
          request.headers.set("Authorization", `Bearer ${accessToken}`);
        }

        console.log("%c📡 API Request", "color: cyan; font-weight: bold;");
        console.log("%c🔗 URL:", "color: green;", request.url);
        console.log(
          "%c📝 Headers:",
          "color: orange;",
          Object.fromEntries(request.headers.entries()),
        );
      },
    ],
    afterResponse: [
      async (_request, _options, response) => {
        if (!response.ok) {
          throw new Error(
            `API Error ${response.status}: ${await response.text()}`,
          );
        }
      },
    ],
  },
});

export const handleApiError = (error: unknown, endpoint: string) => {
  const message =
    error instanceof Error ? error.message : "An unexpected error occurred.";
  console.error(`API Error at [${endpoint}]: ${message}`);
  return new Error(`API Error at [${endpoint}]: ${message}`);
};

export default apiClient;
