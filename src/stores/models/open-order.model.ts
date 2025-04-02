import { action, Action, computed, Computed, thunk, Thunk } from "easy-peasy";

import { Model } from ".";

import { notify } from "@/components/atoms/Toast";
import { PLACE_ORDER_TYPES } from "@/constants";
import {
  cancelOrderById,
  createNewOrder,
  fetchOpenOrders,
} from "@/services/order";
import {
  Order,
  OrderParams,
  OrderStatus,
  PlaceOrderDTO,
  UpdateOrderFilledStatusPayload,
  UserOrderStatus,
  WSOrderData,
} from "@/types";
import { WebSocketMessage } from "@/types/socket";
import { hasMatchingOrder, parseWSOrderData } from "@/utils/OrderHelpers";
import { showFailureModal } from "@/utils/PopUpHelpers";

export interface OpenOrderState {
  openOrders: Order[];
  placeOrderTypes: PlaceOrderDTO[];
  orderActionError: string | undefined;
}

export interface OpenOrderActions {
  setOpenOrders: Action<this, Order[]>;
  addNewOrder: Action<this, Order>;
  removeOrderById: Action<this, number>;
  updateOrderFilledStatus: Action<this, UpdateOrderFilledStatusPayload>;
  updateOpenOrder: Action<this, Order>;
  setOrderActionError: Action<this, string | undefined>;
}

export interface OpenOrderComputed {
  openOrderCount: Computed<this, number>;
}

export interface OpenOrderThunks {
  createTransaction: Thunk<this, OrderParams>;
  cancelTransaction: Thunk<this, number>;
  getOpenOrders: Thunk<this, { size: number }>;
  updateOpenOrders: Thunk<this, WSOrderData, any, Model>;
}

export interface OpenOrdersModel
  extends OpenOrderState,
    OpenOrderActions,
    OpenOrderComputed,
    OpenOrderThunks {}

export const openOrdersModel: OpenOrdersModel = {
  placeOrderTypes: PLACE_ORDER_TYPES,
  openOrders: [],
  openOrderCount: computed((state) => {
    return state.openOrders.length;
  }),
  orderActionError: undefined,
  setOpenOrders: action((state, payload) => {
    state.openOrders = payload;
  }),
  addNewOrder: action((state, payload) => {
    state.openOrders.unshift(payload);
  }),
  removeOrderById: action((state, payload) => {
    state.openOrders = state.openOrders.filter((order) => {
      if (order.externalId) {
        return order.externalId !== payload;
      }
      if (order.id) {
        return order.id !== payload;
      }
      return false;
    });
  }),
  updateOrderFilledStatus: action((state, payload) => {
    const index = state.openOrders.findIndex((order) => {
      if (order.externalId) {
        return order.externalId === payload.id;
      }
      if (order.id) {
        return order.id === payload.id;
      }
      return false;
    });
    if (index !== -1) {
      state.openOrders[index].filled = payload.filled;
    }
  }),
  getOpenOrders: thunk(async (actions, payload) => {
    const response = await fetchOpenOrders(payload);
    actions.setOpenOrders(response);
  }),
  updateOpenOrders: thunk((actions, payload, { getState }) => {
    const order = parseWSOrderData(payload as WSOrderData);
    const { openOrders: currentOpenOrders } = getState();
    if (order) {
      switch (payload.status) {
        case UserOrderStatus.ACTIVE:
          if (!hasMatchingOrder(order, currentOpenOrders))
            actions.addNewOrder(order);
          // notify("success", {
          //   params: { type: "success", message: order },
          // });
          break;
        case UserOrderStatus.FILLED:
          // notify("info", {
          //   params: { type: "info", message: order },
          // });
          if (order.filled === order.quantity) {
            actions.removeOrderById(order.externalId || order.id);
          } else {
            const existingOrderIndex = currentOpenOrders.some(
              (o) => o.externalId === (order.externalId || order.id),
            );
            if (existingOrderIndex) {
              actions.updateOrderFilledStatus({
                id: order.externalId || order.id,
                filled: order.filled,
              });
            } else {
              actions.addNewOrder(order);
            }
          }
          break;
        case UserOrderStatus.PARTIALLY_FILLED:
          actions.addNewOrder(order);
          break;
        case UserOrderStatus.CANCELED:
          // notify("danger", {
          //   params: { type: "danger", message: order },
          // });
          actions.removeOrderById(order.externalId || order.id);
          break;
        case UserOrderStatus.REJECTED:
          // notify("reject", {
          //   params: { type: "reject", message: order },
          // });
          actions.removeOrderById(order.externalId || order.id);
          break;
        default:
          break;
      }
    }
  }),
  createTransaction: thunk(async (actions, payload) => {
    const reponse = await createNewOrder(payload);
  }),
  setOrderActionError: action((state, payload) => {
    state.orderActionError = payload;
  }),
  updateOpenOrder: action((state, payload) => {
    const index = state.openOrders.findIndex((item) => item.id === payload.id);
    state.openOrders[index] = payload;
  }),
  cancelTransaction: thunk(async (actions, payload) => {
    try {
      const isCancelled = await cancelOrderById(payload);

      if (!isCancelled) {
        showFailureModal();
      }
      actions.removeOrderById(payload);
    } catch (err) {
      console.log("err", err);
    }
  }),
};
