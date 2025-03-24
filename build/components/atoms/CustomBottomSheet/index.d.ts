import { BottomSheetModalProps } from "@gorhom/bottom-sheet";
export type BottomSheetRefProps = {
    open: () => void;
    close: () => void;
};
declare const CustomBottomSheet: import("react").ForwardRefExoticComponent<BottomSheetModalProps<any> & {
    children?: React.ReactNode;
} & import("react").RefAttributes<BottomSheetRefProps>>;
export default CustomBottomSheet;
//# sourceMappingURL=index.d.ts.map