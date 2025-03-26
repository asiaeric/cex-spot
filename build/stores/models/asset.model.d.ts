import { Action, Thunk } from "easy-peasy";
import { Model } from ".";
import { Asset, UserAssetsQuery } from "../../types";
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
export interface AssetsModel extends AssetsState, AssetsActions, AssetsThunks {
}
export declare const assetModel: AssetsModel;
//# sourceMappingURL=asset.model.d.ts.map