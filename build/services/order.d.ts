import { ApiResponse, CreateOrderQuery, Order, OrderBookData, OrderBookQuery, UserOrderTypeQuery } from "../types";
export declare const cancelOrderById: (id: number) => Promise<any>;
export declare const createNewOrder: (params: CreateOrderQuery) => Promise<Order>;
export declare const fetchOrderBooks: (params: OrderBookQuery) => Promise<OrderBookData>;
export declare function fetchOpenOrders(payload: {
    size: number;
}): Promise<Order[]>;
export declare function fetchOrderHistory(params: UserOrderTypeQuery): Promise<ApiResponse<Order>>;
//# sourceMappingURL=order.d.ts.map