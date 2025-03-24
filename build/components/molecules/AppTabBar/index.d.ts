import React from "react";
import { TabBarProps } from "react-native-tab-view";
interface AppTabBarProps extends TabBarProps<any> {
    onTabPress: (params: {
        route: any;
    }) => void;
}
declare const AppTabBar: React.FC<AppTabBarProps>;
export default AppTabBar;
//# sourceMappingURL=index.d.ts.map