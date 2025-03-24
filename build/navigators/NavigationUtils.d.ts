import { ApplicationStackParamList } from "@/types/navigation";
export declare const navigationRef: import("@react-navigation/native").NavigationContainerRefWithCurrent<ApplicationStackParamList>;
export declare const navigate: (name: keyof ApplicationStackParamList, params?: ApplicationStackParamList[keyof ApplicationStackParamList]) => void;
export declare const reset: (index: number, routes: {
    name: keyof ApplicationStackParamList;
    params?: ApplicationStackParamList[keyof ApplicationStackParamList];
}[]) => void;
//# sourceMappingURL=NavigationUtils.d.ts.map