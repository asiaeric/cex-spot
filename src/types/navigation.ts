import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { OrderAction } from "./order";

export type ApplicationBottomTabParamList = {
  MarketScreen: undefined;
  TransactionScreen: {
    transactionType?: OrderAction;
    pairCode?: string;
  };
};

export type ApplicationStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  MainScreen: undefined;
  StartUpScreen: undefined;
  TradingScreen: undefined;
  SettingScreen: undefined;
  SpotScreen: undefined;
  TransactionScreen: {
    transactionType?: OrderAction;
    pairCode?: string;
  };
  MarketScreen: undefined;
};

export type ApplicationScreenProps =
NativeStackScreenProps<ApplicationStackParamList>;

export enum RouteName {
  Startup = "StartUpScreen",
  SignIn = "SignInScreen",
  SignUp = "SignUpScreen",
  Trading = "TradingScreen",
  Transaction = "TransactionScreen",
  Setting = "SettingScreen",
  Spot = "SpotScreen",
  Market = "MarketScreen",
  Trade = "TradeScreen",
}
