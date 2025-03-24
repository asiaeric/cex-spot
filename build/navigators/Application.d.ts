import { StackNavigationProp } from "@react-navigation/stack";
import { ApplicationStackParamList } from "@/types/navigation";
export declare const useAppNavigation: () => StackNavigationProp<ApplicationStackParamList>;
export declare function useAppRouteParam<T extends keyof ApplicationStackParamList>(): Readonly<ApplicationStackParamList[T]> | undefined;
declare function ApplicationNavigator(): import("react/jsx-runtime").JSX.Element;
export default ApplicationNavigator;
//# sourceMappingURL=Application.d.ts.map