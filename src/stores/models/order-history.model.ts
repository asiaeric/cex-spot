import { action, Action, thunk, Thunk } from "easy-peasy";

import { Model } from ".";

import { DEFAULT_SIZE_REQUEST, initialFilter } from "@/constants";
import { fetchOrderHistory } from "@/services/order";
import { ApiResponse, FetchOrderStatus, FilterDate, Order } from "@/types";
import { WebSocketMessage } from "@/types/socket";
// import { parseWSOrder } from "@/utils/StringHelper";

export interface OrderHistoryState {
  filters: FilterDate;

  extraSize: number;
  orderHistory: Order[];
  orderHistoryLoading: boolean;
  orderHistoryPage: number;
  orderHistoryTotalPages: number;
}

export interface OrderHistoryActions {
  setFilters: Action<this, FilterDate>;

  addNewHistory: Action<this, Order>;
  setOrderHistory: Action<this, ApiResponse<Order>>;
  setOrderHistoryLoading: Action<this, boolean>;
  appendOrderHistory: Action<this, Order[]>;
}

export interface OrderHistoryThunks {
  getOrderHistory: Thunk<this>;
  loadMoreOrderHistory: Thunk<this, undefined, any, Model>;
  updateOrderHistory: Thunk<this, WebSocketMessage>;
}

export interface OrderHistoryModel
  extends OrderHistoryState,
    OrderHistoryActions,
    OrderHistoryThunks {}

export const orderHistoryModel: OrderHistoryModel = {
  filters: initialFilter,
  orderHistory: [],
  extraSize: 0,
  orderHistoryPage: 1,
  orderHistoryTotalPages: 0,
  orderHistoryLoading: false,
  setFilters: action((state, payload) => {
    state.orderHistoryPage = 1;
    state.filters = payload;
  }),
  setOrderHistoryLoading: action((state, payload) => {
    state.orderHistoryLoading = payload;
  }),
  setOrderHistory: action((state, payload) => {
    state.orderHistory = payload.items;
    state.orderHistoryTotalPages = payload.totalPages;
  }),
  addNewHistory: action((state, payload) => {
    state.orderHistory.unshift(payload);
    state.extraSize += 1;
  }),
  appendOrderHistory: action((state, payload) => {
    state.orderHistoryPage += 1;
    state.orderHistory = [...state.orderHistory, ...payload];
  }),
  getOrderHistory: thunk(async (actions, _, { getState }) => {
    const { filters } = getState();
    actions.setOrderHistoryLoading(true);
    const response = await fetchOrderHistory({
      size: DEFAULT_SIZE_REQUEST,
      page: 1,
      fromDate: filters.startDate,
      toDate: filters.endDate,
      statuses: [
        FetchOrderStatus.REJECTED,
        FetchOrderStatus.CANCELLED,
        FetchOrderStatus.FILLED,
      ].join(","),
    });
    actions.setOrderHistory(response);
    actions.setOrderHistoryLoading(false);
  }),
  loadMoreOrderHistory: thunk(async (actions, _, { getState }) => {
    const { orderHistoryPage, orderHistoryTotalPages, extraSize, filters } =
      getState();
    if (orderHistoryPage < orderHistoryTotalPages) {
      const nextPage = orderHistoryPage + 1;
      actions.setOrderHistoryLoading(true);
      const response = await fetchOrderHistory({
        page: nextPage,
        size: DEFAULT_SIZE_REQUEST + (extraSize || 0),
        statuses: [
          FetchOrderStatus.COMPLETED,
          FetchOrderStatus.CANCELLED,
          FetchOrderStatus.REJECTED,
        ].join(","),
        fromDate: filters.startDate,
        toDate: filters.endDate,
      });

      actions.appendOrderHistory(response.items);
      actions.setOrderHistoryLoading(false);
    }
  }),
  updateOrderHistory: thunk((actions, payload) => {
    // const { data } = payload;
    // const order = parseWSOrder(data as WSOrderData);
    // if (order) {
    //   switch (payload.status) {
    //     case OrderStatus.ORDER_FILLED:
    //       if (order.filled === order.quantity) {
    //         actions.addNewHistory({
    //           ...order,
    //           status: FetchOrderStatus.COMPLETED,
    //         });
    //       }
    //       break;
    //     case OrderStatus.ORDER_CANCEL:
    //       actions.addNewHistory({
    //         ...order,
    //         status: FetchOrderStatus.CANCELLED,
    //       });
    //       break;
    //     default:
    //       break;
    //   }
    // }
  }),
};
