import type { UnionConfiguration } from "@/types/theme/config";
import type { FontColors, FontSizes } from "@/types/theme/fonts";
export declare const generateFontColors: (configuration: UnionConfiguration) => FontColors;
export declare const generateFontSizes: () => FontSizes;
export declare const staticFontStyles: {
    readonly bold: {
        readonly fontWeight: "bold";
    };
    readonly uppercase: {
        readonly textTransform: "uppercase";
    };
    readonly capitalize: {
        readonly textTransform: "capitalize";
    };
    readonly alignCenter: {
        readonly textAlign: "center";
    };
    readonly alignLeft: {
        readonly textAlign: "left";
    };
    readonly justify: {
        readonly textAlign: "justify";
    };
    readonly lineHeight18: {
        readonly lineHeight: number;
    };
};
//# sourceMappingURL=fonts.d.ts.map