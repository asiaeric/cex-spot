declare const screenWidth: number, screenHeight: number;
declare const deviceHeight: number, deviceWidth: number;
declare const screenHeightIncludeNavBar: number;
declare const toHeight: (percent: number) => number;
declare const scale: (size: number) => number;
declare const verticalScale: (size: number) => number;
declare const moderateScale: (size: number, factor?: number) => number;
export { scale, verticalScale, moderateScale, screenWidth, screenHeight, deviceHeight, deviceWidth, screenHeightIncludeNavBar, toHeight, };
export declare function ResponsiveFont(size: number, factor?: number): number;
export declare function ResponsiveWidth(size: number, factor?: number): number;
export declare function ResponsiveHeight(size: number, factor?: number): number;
//# sourceMappingURL=responsive.d.ts.map