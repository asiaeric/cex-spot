import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, View } from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";
import {
  TabBarProps,
  TabItemProps,
  TabName,
} from "react-native-collapsible-tab-view/lib/typescript/src/types";

import TabItem from "./TabItem";
import {
  AssetTab,
  OpenOrders,
  OrderHistory,
  OrderTabsName,
  TradingHistory,
} from "./Tabs";

import OrderHistorySvg from "@/components/svg/OrderHistorySvg";
import { navigate } from "@/navigators/NavigationUtils";
import { useStoreState } from "@/stores/hooks";
import { useTheme } from "@/theme";
import { RouteName } from "@/types/navigation";
import { moderateScale } from "@/types/theme/responsive";

const MIN_HEADER_HEIGHT = 0;
export const TAB_BAR_HEIGHT = moderateScale(48);
interface OrderTabsProps {
  renderHeader?: (props: TabBarProps<TabName>) => React.ReactElement | null;
  displayHistory?: boolean;
  displayAssets?: boolean;
  displaySpotAction?: boolean;
  displayOpenOrder?: boolean;
}

function makeLabel<T extends TabName>(label: string) {
  return function labelRenderer(props: TabItemProps<T>) {
    return (
      <TabItem
        index={props.index}
        indexDecimal={props.indexDecimal}
        label={label}
      />
    );
  };
}

function OrderTabs({
  renderHeader,
  displayOpenOrder = false,
  displayAssets = false,
  displayHistory = false,
  displaySpotAction = false,
}: OrderTabsProps) {
  const { backgrounds, layout, gutters } = useTheme();
  const { t } = useTranslation(["cex-spot/common"]);

  const { openOrderCount } = useStoreState((store) => store.openOrdersModel);

  const onSpotHistoryPress = () => {
    navigate(RouteName.Spot);
  };

  // Memoized TabBar & Header
  const renderTabBar = useCallback(
    (props: TabBarProps<TabName>) => {
      return (
        <View
          style={[
            layout.row,
            layout.justifyBetween,
            layout.itemsCenter,
            { height: TAB_BAR_HEIGHT, backgroundColor: "#21262f" },
          ]}>
          <View style={[layout.row, layout.flex_1]}>
            {props.tabNames.map((name, index) => {
              const tabProps = props.tabProps.get(name);
              const label = tabProps?.label;
              const renderLabel = (
                <TabItem
                  index={index}
                  indexDecimal={props.indexDecimal}
                  label={name}
                />
              );

              return (
                <TouchableOpacity
                  key={name}
                  onPress={() => props.onTabPress(name)}
                  style={[
                    layout.flex_1,
                    layout.justifyCenter,
                    layout.itemsCenter,
                  ]}>
                  {renderLabel}
                </TouchableOpacity>
              );
            })}
          </View>
          {displaySpotAction && (
            <TouchableOpacity
              onPress={onSpotHistoryPress}
              style={[gutters.padding_16]}>
              <OrderHistorySvg />
            </TouchableOpacity>
          )}
        </View>
      );
    },
    [displaySpotAction, onSpotHistoryPress, layout, gutters],
  );

  return (
    <Tabs.Container
      containerStyle={[layout.zm1, layout.overflowHidden]}
      headerContainerStyle={backgrounds.neutral600}
      renderTabBar={renderTabBar}
      renderHeader={renderHeader}
      allowHeaderOverscroll={true}>
      {displayOpenOrder ? (
        <Tabs.Tab
          name={OrderTabsName.OpenOrders}
          label={makeLabel(t("common:openOrders", { value: openOrderCount }))}>
          <OpenOrders />
        </Tabs.Tab>
      ) : null}

      {displayHistory ? (
        <Tabs.Tab
          name={OrderTabsName.OrderHistory}
          label={makeLabel(t("common:orderHistory"))}>
          <OrderHistory />
        </Tabs.Tab>
      ) : null}
      {displayHistory ? (
        <Tabs.Tab
          name={OrderTabsName.Trading}
          label={makeLabel(t("common:trading"))}>
          <TradingHistory />
        </Tabs.Tab>
      ) : null}
      {displayAssets ? (
        <Tabs.Tab
          name={OrderTabsName.Assets}
          label={makeLabel(t("common:assets"))}>
          <AssetTab />
        </Tabs.Tab>
      ) : null}
    </Tabs.Container>
  );
}

export default OrderTabs;
