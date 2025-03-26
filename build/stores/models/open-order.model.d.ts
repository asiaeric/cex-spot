import { Action, Computed, Thunk } from "easy-peasy";
import { Model } from ".";
import { Order, OrderParams, PlaceOrderDTO, UpdateOrderFilledStatusPayload } from "../../types";
import { WebSocketMessage } from "../../types/socket";
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
    getOpenOrders: Thunk<this, {
        size: number;
    }>;
    updateOpenOrders: Thunk<this, WebSocketMessage, any, Model>;
}
export interface OpenOrdersModel extends OpenOrderState, OpenOrderActions, OpenOrderComputed, OpenOrderThunks {
}
export declare const openOrdersModel: OpenOrdersModel;
//# sourceMappingURL=open-order.model.d.ts.map