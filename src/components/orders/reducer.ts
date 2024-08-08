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
