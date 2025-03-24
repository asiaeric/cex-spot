import React from "react";
type Props = {
    title?: string;
};
export type ConfirmPopupRefProps = {
    open: (onConfirm: () => void) => void;
};
declare const ConfirmPopup: React.ForwardRefExoticComponent<Props & React.RefAttributes<ConfirmPopupRefProps>>;
export default ConfirmPopup;
//# sourceMappingURL=ConfirmPopup.d.ts.map