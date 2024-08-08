import { Order, OrderItem } from "./types";
import { ADD_ITEM, REMOVE_ITEM, INITIALIZE_ORDERS, OrderActionTypes } from "./actions";
import { storeOrdersInLocalStorage } from "../../helpers/LocalStorage";

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

        case ADD_ITEM: {
            const { orderId, productId, quantity, productPrice } = action.payload;
            const orderIndex = state.orders.findIndex((order) => order.id === orderId);
            if (orderIndex === -1) return state;

            const existingOrder = state.orders[orderIndex];
            const existingItemIndex = existingOrder.items.findIndex(
                (item) => item["product-id"] === productId
            );

            let updatedItems;
            if (existingItemIndex > -1) {
                updatedItems = [...existingOrder.items];
                const existingItem = updatedItems[existingItemIndex];
                const newQuantity = parseInt(existingItem.quantity) + quantity;
                updatedItems[existingItemIndex] = {
                    ...existingItem,
                    quantity: newQuantity.toString(),
                    total: (newQuantity * parseFloat(existingItem["unit-price"])).toFixed(
                        2
                    ),
                };
            } else {
                const newItem: OrderItem = {
                    "product-id": productId,
                    quantity: quantity.toString(),
                    "unit-price": productPrice,
                    total: (quantity * parseFloat(productPrice)).toFixed(2),
                };
                updatedItems = [...existingOrder.items, newItem];
            }

            const updatedTotal = updatedItems
                .reduce((acc, item) => acc + parseFloat(item.total), 0)
                .toFixed(2);

            const updatedOrder = {
                ...existingOrder,
                items: updatedItems,
                total: updatedTotal,
            };

            const updatedOrders = [...state.orders];
            updatedOrders[orderIndex] = updatedOrder;

            storeOrdersInLocalStorage(updatedOrders);

            return {
                ...state,
                orders: updatedOrders,
            };
        }

        case REMOVE_ITEM:
            const { orderId: removeOrderId, productId } = action.payload;
            const removeOrderIndex = state.orders.findIndex((order) => order.id === removeOrderId);
            if (removeOrderIndex === -1) return state;


            const orderToRemoveFrom = state.orders[removeOrderIndex];
            const updatedOrderItems = orderToRemoveFrom.items.filter(
                (item) => item["product-id"] !== productId
            );

            const newTotal = updatedOrderItems
                .reduce((acc, item) => acc + parseFloat(item.total), 0)
                .toFixed(2);

            const updatedOrderAfterRemove = {
                ...orderToRemoveFrom,
                items: updatedOrderItems,
                total: newTotal,
            };

            const ordersAfterRemove = [...state.orders];
            ordersAfterRemove[removeOrderIndex] = updatedOrderAfterRemove;

            storeOrdersInLocalStorage(ordersAfterRemove);

            return {
                ...state,
                orders: ordersAfterRemove,
            };

        default:
            return state;
    }
};
