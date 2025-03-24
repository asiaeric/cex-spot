import React, { ReactNode } from "react";
import { TextStyle } from "react-native";
type TextVariant = "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "Title" | "SubTitle" | "Caption" | "SubCaption";
interface AppTextProps {
    children: ReactNode;
    style?: TextStyle | TextStyle[];
    variant?: TextVariant;
    ellipsizeMode?: "head" | "middle" | "tail" | "clip";
}
interface AppTextWithVariantProps extends React.FC<AppTextProps> {
    H1: React.FC<AppTextProps>;
    H2: React.FC<AppTextProps>;
    H3: React.FC<AppTextProps>;
    H4: React.FC<AppTextProps>;
    H5: React.FC<AppTextProps>;
    Title: React.FC<AppTextProps>;
    SubTitle: React.FC<AppTextProps>;
    Caption: React.FC<AppTextProps>;
    SubCaption: React.FC<AppTextProps>;
}
declare const StyledTextComponent: AppTextWithVariantProps;
export default StyledTextComponent;
//# sourceMappingURL=index.d.ts.map