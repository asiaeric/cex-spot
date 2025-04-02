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
import { setAccessToken } from "./services/instance";
import { useLoginSubscription } from "./hooks/useLoginSubscription";
import { enableMapSet } from "immer";
import { initCexSpotI18n } from "./translations";
// const NativeView: React.ComponentType<CexSpotViewProps> = requireNativeView("CexSpot");

export const wsClient = CEXWebSocket.getInstance();

// This is to ensure all needed functions is initialized when the module is loaded
export const initialCexSpot = async () => {
  await initCexSpotI18n(); // Ensure i18n is initialized
  ignoreErrorVirtualList();
  enableMapSet();
}

interface CexSpotViewProps {
  accessToken?: string;
}

export const CexSpotView = ({ accessToken }: CexSpotViewProps) => {
  React.useEffect(() => {
    setAccessToken(
      accessToken ||
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJ0bmVySWQiOiIxIiwicGFydG5lclByb2ZpbGVJZCI6ImEwZDVmMjViLWQwMmQtNDkzYS1iNGM5LTU4NDEzMTcxYjI0ZiIsImlhdCI6MTc0MzU4MDMwNSwiZXhwIjoxNzQzNTgxMzkwLCJhdWQiOiJjZXgtaW50ZXJuYWwtc2VydmljZSIsImlzcyI6ImNleC1hdXRoLXNlcnZpY2UiLCJzdWIiOiIyOTc0Njc1OTM1Nzk1NjE5ODQifQ.T3HLlBOJmqPdcgfqPbFQq0qJvaWZgt2L5TRixA21NjU",
    );
  }, [accessToken]);

  useLoginSubscription({ code: accessToken || "" });

  return (
    // <SafeAreaProvider>
    //   <GestureHandlerRootView style={{ flex: 1 }}>
    //     <KeyboardProvider>
    <StoreProvider store={store}>
      <ThemeProvider storage={storage}>
        <BottomSheetModalProvider>
          <ApplicationNavigator />
          <GlobalModal />
        </BottomSheetModalProvider>
      </ThemeProvider>
    </StoreProvider>
    //     </KeyboardProvider>
    //   </GestureHandlerRootView>
    // </SafeAreaProvider>
  );
}
