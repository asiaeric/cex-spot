import * as React from "react";
import { TabBarProps } from "react-native-tab-view";
interface AppTabViewProps {
    scenes: {
        [key: string]: React.ComponentType<any>;
    };
    renderTabBar?: (props: TabBarProps<any>) => React.ReactNode;
}
declare const AppTabView: ({ scenes, renderTabBar }: AppTabViewProps) => import("react/jsx-runtime").JSX.Element;
export default AppTabView;
//# sourceMappingURL=index.d.ts.map