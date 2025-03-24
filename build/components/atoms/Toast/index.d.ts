import ToastDisplay from "./ToastDisplay";
export declare const notify: import("react-native-notificated/lib/typescript/types").Notify<{
    success: {
        component: typeof ToastDisplay;
        config: {
            duration: number;
            animationConfig: import("react-native-notificated").AnimationBuilder;
            notificationWidth: number;
        };
    };
    danger: {
        component: typeof ToastDisplay;
        config: {
            duration: number;
            animationConfig: import("react-native-notificated").AnimationBuilder;
            notificationWidth: number;
        };
    };
    info: {
        component: typeof ToastDisplay;
        config: {
            duration: number;
            animationConfig: import("react-native-notificated").AnimationBuilder;
            notificationWidth: number;
        };
    };
    reject: {
        component: typeof ToastDisplay;
        config: {
            duration: number;
            animationConfig: import("react-native-notificated").AnimationBuilder;
            notificationWidth: number;
        };
    };
}>, remove: import("react-native-notificated/lib/typescript/types").Remove, NotificationsProvider: import("react").FC<import("react").PropsWithChildren<Record<never, any>>>;
declare const Toast: () => import("react/jsx-runtime").JSX.Element;
export default Toast;
//# sourceMappingURL=index.d.ts.map