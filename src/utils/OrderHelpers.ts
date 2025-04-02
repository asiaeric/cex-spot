import { t } from "i18next";

import { FetchOrderStatus, Order, OrderAction, WSOrderData } from "@/types";
import { formatISO } from "date-fns";

interface AggregatedOrder {
  quantity: number;
  priceFromUser: number;
}

export function hasMatchingOrder(order: Order, openOrders: Order[]): boolean {
  const actionNeeded =
    order.action === OrderAction.SELL ? OrderAction.BUY : OrderAction.SELL;
  const amountNeeded = order.priceFromUser;
  const sizeNeeded = order.quantity;
  const marketNeeded = order.symbolCode;

  const aggregatedOrders = openOrders.reduce<Record<number, AggregatedOrder>>(
    (acc, curr) => {
      if (
        curr.action === actionNeeded &&
        curr.symbolCode === marketNeeded &&
        curr.filled === 0
      ) {
        const key = curr.priceFromUser;
        if (!acc[key]) {
          acc[key] = { quantity: 0, priceFromUser: curr.priceFromUser };
        }
        acc[key].quantity += curr.quantity;
      }
      return acc;
    },
    {},
  );

  return Object.values(aggregatedOrders).some(
    (aggregatedOrder) =>
      aggregatedOrder.priceFromUser === amountNeeded &&
      aggregatedOrder.quantity >= sizeNeeded,
  );
}

export function generateNameStatus(status: string): string {
  switch (status) {
    case FetchOrderStatus.COMPLETED:
      return t("order:filled");
    case FetchOrderStatus.CANCELLED:
    case FetchOrderStatus.REJECTED:
      return t("order:cancelled");

    default:
      return "";
  }
}

export const getDecimalPlaces = (size: number): number => {
  "worklet";

  const sizeAsString = size.toString();
  return sizeAsString.includes(".") ? sizeAsString.split(".")[1].length : 0;
};

export function adjustValueToSize(value: number, size: number) {
  "worklet";

  const decimalPlaces = getDecimalPlaces(size);

  // Fix the result to the correct number of decimal places using rounding
  const factor = 10 ** decimalPlaces;
  const result = Math.round(value * factor) / factor;
  return result;
}

export const parseWSOrderData = (data: WSOrderData): Order => {
  const [baseCurrency, quoteCurrency] = data.symbolCode.split("_"); // Assuming symbolCode is in "BASE_QUOTE" format

  return {
    id: Number(data.id),
    userId: Number(data.userId),
    symbolCode: data.symbolCode,
    symbolName: `${baseCurrency}/${quoteCurrency}`, // Example: "BTC/USDT"
    priceFromUser: Number(data.price),
    quantity: Number(data.quantity),
    filled: Number(data.baseFilled),
    action: data.action,
    type: data.type,
    status: data.status,
    total: Number(data.price) * Number(data.quantity),
    fee: Number(data.fee),
    baseCurrency,
    quoteCurrency,
    createdAt: formatISO(data.createdAt),
    updatedAt: formatISO(data.updatedAt),
    externalId: Number(data.id),
    matchingPrice: Number(data.matchingPrice),
  };
};
