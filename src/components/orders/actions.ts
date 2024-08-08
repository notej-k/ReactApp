import { Order } from "./types";

export const REMOVE_ITEM = "REMOVE_ITEM";
export const INITIALIZE_ORDERS = "INITIALIZE_ORDERS";

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  payload: {
    orderId: string;
    productId: string | undefined;
  };
}

interface SetOrdersAction {
  type: typeof INITIALIZE_ORDERS;
  payload: {
    orders: Order[];
  };
}

export type OrderActionTypes =  RemoveItemAction | SetOrdersAction;

export const removeItem = (
  orderId: string,
  productId: string | undefined
): RemoveItemAction => ({
  type: REMOVE_ITEM,
  payload: { orderId, productId },
});

export const initializeOrders = (orders: Order[]): SetOrdersAction => ({
  type: INITIALIZE_ORDERS,
  payload: { orders },
});
