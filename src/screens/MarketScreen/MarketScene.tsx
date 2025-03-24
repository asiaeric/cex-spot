import React from "react";
import { View } from "react-native";

import SpotScene from "./SpotScene";

import { AppTabBarV2, AppTabView } from "@/components/molecules";
import { useLoginSubscription } from "@/hooks/useLoginSubscription";
import { useStoreState } from "@/stores/hooks";
import { useTheme } from "@/theme";

const scenes = {
  spot: SpotScene,
};

const MarketScene = () => {
  const { layout } = useTheme();
  const { user } = useStoreState((state) => state.userModel);
  useLoginSubscription({ code: user!.partnerToken!.accessToken });

  return (
    <View style={layout.flex_1}>
      <AppTabView
        scenes={scenes}
        renderTabBar={(props1) => (
          <AppTabBarV2
            {...props1}
            onTabPress={({ route }) => props1.jumpTo(route.key)}
          />
        )}
      />
    </View>
  );
};

export default MarketScene;
