import React from "react";
type ChildWrapperProps = {
    isEnabled: boolean;
    ignoreDelay: boolean;
    hideClose?: boolean;
    onClosePress: () => void;
    onEnterAnimationFinished: () => void;
    children: React.ReactNode;
};
declare function ChildWrapper({ isEnabled, ignoreDelay, hideClose, onClosePress, onEnterAnimationFinished, children, }: ChildWrapperProps): import("react/jsx-runtime").JSX.Element;
export default ChildWrapper;
//# sourceMappingURL=ChildWrapper.d.ts.map