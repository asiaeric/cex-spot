import { deleteData, fetchData, postData } from "./api";
import { handleApiError } from "./instance";

import {
  ApiResponse,
  CreateOrderQuery,
  FetchOrderStatus,
  Order,
  OrderBookData,
  OrderBookQuery,
  UserOrderStatus,
  UserOrderTypeQuery,
} from "@/types";

export const cancelOrderById = async (id: number): Promise<any> => {
  try {
    return await deleteData(`orders/${id}`);
  } catch (error) {
    console.error(`Error canceling order ${id}:`, error);
    throw new Error("Failed to cancel order");
  }
};

export const createNewOrder = async (
  params: CreateOrderQuery,
): Promise<Order> => {
  const path = `orders/${params.symbolCode}/place`;
  const response = await postData<Order>(path, params);
  return response;
};

export const fetchOrderBooks = async (
  params: OrderBookQuery,
): Promise<OrderBookData> => {
  const response: OrderBookData = await fetchData<OrderBookData>(
    `orderbook/depth/${params.depth}`,
    { symbol: params.symbol },
  );
  return response;
};

// export const fetchOrderHistory = async (params: {
//   symbolCode: string;
// }): Promise<OrderBookData> => {
//   const response: OrderBookData = await fetchData(
//     "orderbook/depth/1000",
//     params,
//   );
//   return response;
// };

export async function fetchOpenOrders(payload: {
  size: number;
}): Promise<Order[]> {
  const params = new URLSearchParams({
    size: payload.size.toString(),
  });

  [UserOrderStatus.ACTIVE, UserOrderStatus.PARTIALLY_FILLED].forEach(
    (status) => {
      params.append("statuses", status);
    },
  );

  const response = await fetchData<ApiResponse<Order>>("orders", params);
  return response.items;
}

export async function fetchOrderHistory(
  params: UserOrderTypeQuery,
): Promise<ApiResponse<Order>> {
  const response = await fetchData<ApiResponse<Order>>("orders", params);
  return response;
}

// export async function fetchTradingMarket(
//   symbol: string,
// ): Promise<TradingMarket[]> {
//   const searchParams = {
//     size: 40,
//   };

//   if (!symbol) {
//     throw new Error("Invalid Symbol");
//   }

//   const response = await fetchData<ApiResponse<TradingMarket>>(
//     `trades/market/${symbol}`,
//     searchParams,
//   );

//   return response.items;
// }
