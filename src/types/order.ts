enum OrderAction {
  BUY = "BUY",
  SELL = "SELL",
}

enum OrderType {
  LIMIT = "LIMIT",
  MARKET = "MARKET",
}

enum OrderSide {
  ASKS = "ASKS",
  BIDS = "BIDS",
}

enum OrderStatus {
  ORDER_SUBMITTED = "ORDER_SUBMITTED",
  ORDER_FILLED = "ORDER_FILLED",
  ORDER_CANCEL = "ORDER_CANCEL",
  ORDER_REJECTED = "ORDER_REJECTED",
}

enum UserOrderStatus {
  ACTIVE = "ACTIVE",
  FILLED = "FILLED",
  PARTIALLY_FILLED = "PARTIALLY_FILLED",
  CANCELED = "CANCELED",
  INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE",
  USER_DOES_NOT_EXIST = "USER_DOES_NOT_EXIST",
  USER_DISABLED = "USER_DISABLED",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  ORDER_INVALID = "ORDER_INVALID",
  REJECTED = "REJECTED",
}

interface Order {
  id: number;
  userId: number;
  symbolCode: string;
  symbolName: string;
  priceFromUser: number;
  quantity: number;
  filled: number;
  action: string;
  type: string;
  status: string;
  total: number;
  fee: number;
  baseCurrency: string;
  quoteCurrency: string;
  createdAt: string;
  updatedAt: string;
  externalId: number;
  matchingPrice: number;
}

interface CreateOrderQuery {
  action: OrderAction;
  price: number;
  quantity?: number;
  symbolCode: string;
  type: OrderType;
}

interface ResponseOrders {
  items: Order[];
  page: number;
  perPage: number;
  totalPages: number;
}

interface WSOrderData {
  E: number; // Event timestamp
  action: OrderAction;
  avrPrice: string;
  baseFilled: string;
  createdAt: number;
  dsTime: number;
  e: "orderUpdate";
  fee: string;
  feeAsset: string;
  id: string;
  matchingPrice: string;
  price: string;
  quantity: string;
  quoteFilled: string;
  quoteQuantity: string;
  status: UserOrderStatus;
  submittedAt: number;
  symbolCode: string;
  type: "LIMIT" | "MARKET";
  updatedAt: number;
  userId: string;
}

interface PlaceOrderDTO {
  id: number;
  code: OrderType;
  disable: boolean;
  title: string;
  description: string;
}

interface SearchParams {
  size: number;
  page: number;
  sortBy: string;
  statuses: string;
  startDate?: string;
  endDate?: string;
}

interface UpdateOrderFilledStatusPayload {
  id: number;
  filled: number;
}

enum FetchOrderStatus {
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  REJECTED = "REJECTED",
  ACTIVE = "ACTIVE",
  FILLED = "FILLED",
}

interface FetchOrderRequest {
  page: number;
  extraSize?: number;
  startDate?: string;
  endDate?: string;
}
interface OrderParams {
  action: OrderAction;
  price: number;
  quantity?: number;
  symbolCode: string;
  type: OrderType;
}

interface UserOrderTypeQuery {
  size: number;
  statuses: string;
  page: number;
  fromDate?: string;
  toDate?: string;
}

export {
  CreateOrderQuery,
  FetchOrderRequest,
  FetchOrderStatus,
  Order,
  OrderAction,
  OrderParams,
  OrderSide,
  OrderStatus,
  OrderType,
  PlaceOrderDTO,
  ResponseOrders,
  SearchParams,
  UpdateOrderFilledStatusPayload,
  UserOrderTypeQuery,
  WSOrderData,
  UserOrderStatus,
};
