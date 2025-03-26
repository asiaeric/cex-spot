import React, { PropsWithChildren } from "react";
import type { MMKV } from "react-native-mmkv";
import type { Variant } from "../../types/theme/config";
import type { Theme } from "../../types/theme/theme";
type Context = Theme & {
    changeTheme: (variant: Variant) => void;
};
export declare const ThemeContext: React.Context<Context | undefined>;
type Props = PropsWithChildren<{
    storage: MMKV;
}>;
declare function ThemeProvider({ children, storage }: Props): import("react/jsx-runtime").JSX.Element;
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.d.ts.map