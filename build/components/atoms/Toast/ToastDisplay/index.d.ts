import { Order } from "../../../../types";
interface ToastProps {
    message: Order;
    type: "success" | "info" | "danger" | "reject";
}
declare function ToastDisplay(props: ToastProps): import("react/jsx-runtime").JSX.Element;
export default ToastDisplay;
//# sourceMappingURL=index.d.ts.map