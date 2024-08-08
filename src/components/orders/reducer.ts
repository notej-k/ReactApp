import { Order, OrderItem } from "./types";
import { INITIALIZE_ORDERS, OrderActionTypes } from "./actions";

interface OrderState {
    orders: Order[];
}

export const initialOrderState: OrderState = {
    orders: [],
};

export const orderReducer = (
    state: OrderState,
    action: OrderActionTypes
): OrderState => {
    switch (action.type) {
        case INITIALIZE_ORDERS:
            return {
                ...state,
                orders: action.payload.orders,
            };
        default:
            return state;
    }
};
