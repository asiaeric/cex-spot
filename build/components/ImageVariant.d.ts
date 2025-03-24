import { ImageProps, ImageSourcePropType } from "react-native";
import type { Variant } from "../types/theme/config";
type VariantSource = `source${Capitalize<Exclude<Variant, "default">>}`;
type Props = ImageProps & {
    [variant in VariantSource]?: ImageSourcePropType;
};
declare function ImageVariant({ source: defaultSource, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default ImageVariant;
//# sourceMappingURL=ImageVariant.d.ts.map