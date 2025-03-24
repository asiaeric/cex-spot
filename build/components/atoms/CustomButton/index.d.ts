import { ViewStyle, TextStyle, ImageStyle, ImageSourcePropType } from "react-native";
type CustomButtonProps = {
    type?: "regular" | "circle" | "image" | "square";
    onPress: () => void;
    loading?: boolean;
    text?: string;
    imageSource?: ImageSourcePropType;
    customStyle?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle;
    imageStyle?: ImageStyle | ImageStyle[];
    positiveColor?: boolean;
    isDisabled?: boolean;
    testID?: string;
};
declare function CustomButton(props: CustomButtonProps): any;
export default CustomButton;
//# sourceMappingURL=index.d.ts.map