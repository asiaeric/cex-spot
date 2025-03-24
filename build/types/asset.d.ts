type UserAsset = {
    asset: string;
    asset_name: string;
    actual_balance: string;
    available_balance: string;
};
type UserAssetsQuery = {
    profile_id: string;
    assets: UserAsset[];
};
export { UserAsset, UserAssetsQuery };
//# sourceMappingURL=asset.d.ts.map