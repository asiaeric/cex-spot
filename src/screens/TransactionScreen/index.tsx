import { useCallback, useEffect, useRef } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { PairSelection } from "@/components/molecules";
import SideOrderBook from "@/components/molecules/OrderBook/SideOrderBook";
import OrderTabs from "@/components/molecules/OrderTabs";
import { Header } from "@/components/molecules/OrderTabs/Header";
import TransactionForm from "@/components/molecules/TransactionForm";
import ChartSvg from "@/components/svg/ChartSvg";
import SettingSvg from "@/components/svg/SettingSvg";
import { SafeScreen } from "@/components/template";
import { useOrderBookSubscription } from "@/hooks/useOrderBookSubscription";
import { useOrderSubscription } from "@/hooks/useOrderSubscription";
import { useStatisticSubscription } from "@/hooks/useStatisticSubscription";
import { navigationRef } from "@/navigators/NavigationUtils";
import { useStoreActions, useStoreState } from "@/stores/hooks";
import { useTheme } from "@/theme";
import { RouteName } from "@/types/navigation";

const TransactionScreen = () => {
  const { layout, gutters } = useTheme();
  const { getOrderBooks } = useStoreActions((store) => store.orderBookModel);
  const { getAssets, updateAssets } = useStoreActions(
    (action) => action.assetModel,
  );
  const { user } = useStoreState((action) => action.userModel);
  const { currentPair } = useStoreState((store) => store.tradingPairModel);
  const { getFee } = useStoreActions((store) => store.feeModel);

  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const isUpdatingRef = useRef(false);

  const updateAssetsWithProfile = useCallback(async () => {
    const profileId = user?.partnerProfile?.profileId;
    if (!profileId || isUpdatingRef.current) return;

    try {
      isUpdatingRef.current = true;
      await updateAssets({ assets: [], profile_id: profileId });
    } catch (error) {
      console.error("Failed to update assets:", error);
    } finally {
      isUpdatingRef.current = false;
    }
  }, [user?.partnerProfile?.profileId, updateAssets]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        await getAssets();
        await updateAssetsWithProfile();
      } catch (error) {
        console.error("Failed to fetch assets:", error);
      }
    };

    fetchAssets();

    // Only set up interval if we have a profileId
    if (user?.partnerProfile?.profileId) {
      intervalRef.current = setInterval(updateAssetsWithProfile, 10000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentPair, updateAssetsWithProfile]);

  useOrderBookSubscription({
    symbol: currentPair?.code,
    depth: 100,
  });

  useOrderSubscription();
  useStatisticSubscription({ code: currentPair!.code });

  useEffect(() => {
    getOrderBooks({ symbol: currentPair!.code, depth: 1000 });
  }, [currentPair?.code]);

  const { getOpenOrders } = useStoreActions((action) => action.openOrdersModel);

  useEffect(() => {
    getOpenOrders({ size: 20 });
  }, []);

  useEffect(() => {
    if (currentPair) {
      getFee(currentPair.code);
    }
  }, [currentPair]);

  const renderHeader = useCallback(
    () => (
      <Header>
        <TransactionForm customStyle={styles.leftHeader} />
        <SideOrderBook customStyle={styles.rightHeader} />
      </Header>
    ),
    [],
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeScreen ignoreEdge={["bottom"]}>
        <View
          style={[layout.row, layout.justifyBetween, gutters.marginLeft_16]}>
          <View style={[layout.row, layout.itemsCenter]}>
            <PairSelection />
          </View>
          <View style={[layout.row]}>
            <TouchableOpacity
              style={[gutters.marginRight_16, layout.selfCenter]}
              onPress={() => {
                navigationRef.navigate(RouteName.Trading);
              }}>
              <ChartSvg />
            </TouchableOpacity>
            <TouchableOpacity
              style={[gutters.marginRight_16, layout.selfCenter]}
              onPress={() => {
                navigationRef.navigate(RouteName.Setting);
              }}>
              <SettingSvg />
            </TouchableOpacity>
          </View>
        </View>
        <OrderTabs
          renderHeader={renderHeader}
          displayAssets
          displaySpotAction
          displayOpenOrder
        />
      </SafeScreen>
    </TouchableWithoutFeedback>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  leftHeader: {
    flex: 0.6,
  },
  rightHeader: {
    flex: 0.4,
  },
});
