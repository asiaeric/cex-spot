import React from "react";
export type GlobalModalProps = {
    skipQueue?: boolean;
    modalKey?: string;
    hideClose?: boolean;
    disableLayoutChangeAnimation?: boolean;
    Component: React.FC;
};
export declare function showGlobalModal(prop: GlobalModalProps): void;
export declare function hideGlobalModal(key: string): void;
declare function GlobalModal(): import("react/jsx-runtime").JSX.Element;
export default GlobalModal;
//# sourceMappingURL=GlobalModal.d.ts.map