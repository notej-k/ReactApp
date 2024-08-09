import { Order } from "./types";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const INITIALIZE_ORDERS = "INITIALIZE_ORDERS";

export interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: {
    orderId: string;
    productId: string;
    quantity: number;
    productPrice: string;
  };
}

export interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  payload: {
    orderId: string;
    productId: string | undefined;
  };
}

export interface SetOrdersAction {
  type: typeof INITIALIZE_ORDERS;
  payload: {
    orders: Order[];
  };
}

export type OrderActionTypes = AddItemAction | RemoveItemAction | SetOrdersAction;

export const addItem = (
  orderId: string,
  productId: string,
  quantity: number,
  productPrice: string
): AddItemAction => ({
  type: ADD_ITEM,
  payload: { orderId, productId, quantity, productPrice },
});

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
