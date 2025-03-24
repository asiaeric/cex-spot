import { ViewStyle } from "react-native";
interface IOrderBook {
    customStyle?: ViewStyle | ViewStyle[];
    onPressItems?: (e: number) => void;
}
declare function SideOrderBook({ customStyle, onPressItems }: IOrderBook): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof SideOrderBook>;
export default _default;
//# sourceMappingURL=SideOrderBook.d.ts.map