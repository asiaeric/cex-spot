import { Order } from "../../../types";
export type ModifyPopUpRefProps = {
    open: () => void;
    close: () => void;
    currentOrder: (item: Order) => void;
};
declare const ModifyPopUp: import("react").ForwardRefExoticComponent<import("react").RefAttributes<ModifyPopUpRefProps>>;
export default ModifyPopUp;
//# sourceMappingURL=ModifyPopUp.d.ts.map