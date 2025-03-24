import React from "react";
import { TabBarProps } from "react-native-tab-view";
interface AppTabBarV2Props extends TabBarProps<any> {
    onTabPress: (params: {
        route: any;
    }) => void;
}
declare const AppTabBarV2: React.FC<AppTabBarV2Props>;
export default AppTabBarV2;
//# sourceMappingURL=index.d.ts.map