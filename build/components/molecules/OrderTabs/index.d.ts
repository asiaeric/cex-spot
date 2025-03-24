import React from "react";
import { TabBarProps, TabName } from "react-native-collapsible-tab-view/lib/typescript/src/types";
export declare const TAB_BAR_HEIGHT: number;
interface OrderTabsProps {
    renderHeader?: (props: TabBarProps<TabName>) => React.ReactElement | null;
    displayHistory?: boolean;
    displayAssets?: boolean;
    displaySpotAction?: boolean;
    displayOpenOrder?: boolean;
}
declare function OrderTabs({ renderHeader, displayOpenOrder, displayAssets, displayHistory, displaySpotAction, }: OrderTabsProps): import("react/jsx-runtime").JSX.Element;
export default OrderTabs;
//# sourceMappingURL=index.d.ts.map