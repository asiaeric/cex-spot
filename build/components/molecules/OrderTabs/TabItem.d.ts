import { TabItemProps, TabName } from "react-native-collapsible-tab-view/lib/typescript/src/types";
interface TabItemPropsExtended<T extends TabName> extends Pick<TabItemProps<T>, "index" | "indexDecimal"> {
    label: string;
}
declare function TabItem<T extends TabName>({ index, indexDecimal, label, }: TabItemPropsExtended<T>): import("react/jsx-runtime").JSX.Element;
export default TabItem;
//# sourceMappingURL=TabItem.d.ts.map