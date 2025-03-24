import { TextInputProps, ViewStyle } from "react-native";
type CustomTextInputProps = TextInputProps & {
    customStyle?: ViewStyle | ViewStyle[];
    centerText?: boolean;
    title?: string;
    type?: "default" | "small";
};
declare function CustomTextInput(props: CustomTextInputProps): import("react/jsx-runtime").JSX.Element;
export default CustomTextInput;
//# sourceMappingURL=AppTextInput.d.ts.map