import { UserAssetsQuery } from "../types";
declare const fetchUserAssets: () => Promise<{
    name: string;
    code: string;
    decimals: number;
    imgUrl: string;
    precision: number;
    balance?: {
        type: "SPOT";
        amount: number;
        availableAmount: number;
        inUseBalance: number;
    } | undefined;
}[]>;
declare const fetchUserSpotAssets: (params: UserAssetsQuery) => Promise<any>;
export { fetchUserAssets, fetchUserSpotAssets };
//# sourceMappingURL=asset.d.ts.map