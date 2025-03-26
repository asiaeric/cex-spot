import type { BorderColors, BorderWidths, BorderRadius } from "../types/theme/borders";
import type { UnionConfiguration } from "../types/theme/config";
/**
 * Generates border color styles from configuration
 * @param configuration
 */
export declare const generateBorderColors: (configuration: UnionConfiguration) => BorderColors;
/**
 * Generates border radius styles from configuration
 */
export declare const generateBorderRadius: () => BorderRadius;
/**
 * Generates border width styles from configuration
 */
export declare const generateBorderWidths: () => BorderWidths;
/**
 * Static border styles
 * @desc These styles are not generated from configuration, you can add your own
 */
export declare const staticBorderStyles: {};
//# sourceMappingURL=borders.d.ts.map