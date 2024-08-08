import { Order } from "./types";

export const INITIALIZE_ORDERS = "INITIALIZE_ORDERS";


interface SetOrdersAction {
  type: typeof INITIALIZE_ORDERS;
  payload: {
    orders: Order[];
  };
}

export type OrderActionTypes = SetOrdersAction;

export const initializeOrders = (orders: Order[]): SetOrdersAction => ({
  type: INITIALIZE_ORDERS,
  payload: { orders },
});
