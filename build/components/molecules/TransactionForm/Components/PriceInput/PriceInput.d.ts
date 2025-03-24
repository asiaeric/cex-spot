import { TextInput, TextInputProps, ViewStyle } from "react-native";
type InputTextProps = {
    placeholder?: string;
    textInputProps?: TextInputProps;
    labelTopValue?: number;
    borderColor?: string;
    borderWidth?: number;
    paddingVertical?: number;
    borderRadius?: number;
    value: number;
    onChange: (value: number) => void;
    customStyle?: ViewStyle;
    disabled?: boolean;
    hasChangeAction?: boolean;
    size?: number;
    minValue?: number;
    maxValue?: number;
    error?: string;
    onBlur?: () => void;
    showTooltip?: boolean;
};
declare const PriceInput: import("react").ForwardRefExoticComponent<InputTextProps & import("react").RefAttributes<TextInput>>;
export default PriceInput;
//# sourceMappingURL=PriceInput.d.ts.map