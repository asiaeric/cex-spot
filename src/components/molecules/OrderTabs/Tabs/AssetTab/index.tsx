import * as Tabs from "react-native-collapsible-tab-view";

import AssetItem from "./AssetItem";

import { useStoreState } from "@/stores/hooks";
import { useTheme } from "@/theme";
import { Asset } from "@/types";

const renderItem = ({ item }: { item: Asset }) => {
  return <AssetItem item={item} />;
};

const AssetTab = () => {
  const { assets } = useStoreState((state) => state.assetModel);

  const { gutters } = useTheme();

  return (
    <Tabs.Lazy cancelLazyFadeIn>
      <Tabs.FlatList
        contentContainerStyle={[gutters.marginTop_16, gutters.marginBottom_40]}
        showsVerticalScrollIndicator={false}
        data={assets}
        keyExtractor={(i) => i.code}
        renderItem={renderItem}
        nestedScrollEnabled
      />
    </Tabs.Lazy>
  );
};

export default AssetTab;
