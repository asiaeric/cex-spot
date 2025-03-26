import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { StoreProvider } from "easy-peasy";
import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

import GlobalModal from "./components/GlobalModal";
import ApplicationNavigator from "./navigators/Application";
import store, { storage } from "./stores";
import { ThemeProvider } from "./theme";
import { ignoreErrorVirtualList } from "./utils/StringHelper";
import CEXWebSocket from "./ws/Websocket";
import "react-native-reanimated";
// const NativeView: React.ComponentType<CexSpotViewProps> = requireNativeView("CexSpot");

export const wsClient = CEXWebSocket.getInstance();

ignoreErrorVirtualList();

export default function CexSpotView() {
  return (
    // <SafeAreaProvider>
      // <GestureHandlerRootView style={{ flex: 1 }}>
        // <KeyboardProvider>
          <StoreProvider store={store}>
            <ThemeProvider storage={storage}>
              <BottomSheetModalProvider>
                <ApplicationNavigator />
                <GlobalModal />
              </BottomSheetModalProvider>
            </ThemeProvider>
          </StoreProvider>
        // </KeyboardProvider>
      // </GestureHandlerRootView>
    // </SafeAreaProvider>
  );
}
