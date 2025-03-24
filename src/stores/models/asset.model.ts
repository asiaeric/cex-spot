import { Action, Thunk, action, thunk } from "easy-peasy";

import { Model } from ".";

import { fetchUserAssets, fetchUserSpotAssets } from "@/services/asset";
import { Asset, UserAssetsQuery } from "@/types";

export interface AssetsState {
  assets: Asset[];
  error: string;
}

export interface AssetsActions {
  setAssets: Action<this, Asset[]>;
  setError: Action<this, string>;
}

export interface AssetsThunks {
  getAssets: Thunk<this, undefined, any, Model>;
  updateAssets: Thunk<this, UserAssetsQuery, any, Model>;
}

export interface AssetsModel extends AssetsState, AssetsActions, AssetsThunks {}

export const assetModel: AssetsModel = {
  assets: [],
  setAssets: action((state, payload) => {
    state.assets = payload;
  }),
  getAssets: thunk(async (actions, payload, { getStoreState }) => {
    const data = await fetchUserAssets();
    actions.setAssets(data);
  }),
  updateAssets: thunk(async (actions, payload, { getState }) => {
    const { assets } = getState();
    const data = await fetchUserSpotAssets(payload);

    const mappedData = data.map((item) => {
      const assetMetadata = assets.find((meta) => meta.code === item.asset);
      return {
        code: item.asset,
        name: assetMetadata?.name ?? item.asset_name,
        precision: assetMetadata?.precision ?? 8,
        decimals: assetMetadata?.decimals ?? 2,
        imgUrl: assetMetadata?.imgUrl ?? "",
        balance: {
          amount: parseFloat(item.actual_balance),
          availableAmount: parseFloat(item.available_balance),
          inUseBalance:
            parseFloat(item.actual_balance) -
            parseFloat(item.available_balance),
          type: "SPOT" as const,
        },
      };
    });
    actions.setAssets(mappedData);
  }),
  error: "",
  setError: action((state, payload) => {
    state.error = payload;
  }),
};
