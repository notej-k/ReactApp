import { Order } from "./types";

export const REMOVE_ITEM = "REMOVE_ITEM";
export const INITIALIZE_ORDERS = "INITIALIZE_ORDERS";

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  payload: {
    orderId: string;
    itemId: number | undefined;
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
  itemId: number | undefined
): RemoveItemAction => ({
  type: REMOVE_ITEM,
  payload: { orderId, itemId },
});

export const initializeOrders = (orders: Order[]): SetOrdersAction => ({
  type: INITIALIZE_ORDERS,
  payload: { orders },
});
