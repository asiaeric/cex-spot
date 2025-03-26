import { Action, Thunk } from "easy-peasy";
import { Model } from ".";
import { ApiResponse, FilterDate, Order } from "../../types";
import { WebSocketMessage } from "../../types/socket";
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
export interface OrderHistoryModel extends OrderHistoryState, OrderHistoryActions, OrderHistoryThunks {
}
export declare const orderHistoryModel: OrderHistoryModel;
//# sourceMappingURL=order-history.model.d.ts.map