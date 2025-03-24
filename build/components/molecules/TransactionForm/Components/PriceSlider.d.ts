import { StyleProp, ViewStyle } from "react-native";
export interface PriceSliderProps {
    onChange: (value: number) => void;
    containerStyle?: StyleProp<ViewStyle>;
}
export interface PriceSliderRef {
    resetSlider: () => void;
}
declare const _default: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<PriceSliderProps & import("react").RefAttributes<PriceSliderRef>>>;
export default _default;
//# sourceMappingURL=PriceSlider.d.ts.map