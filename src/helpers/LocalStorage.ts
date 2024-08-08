import { Order } from "../components/orders/types";

export const storeOrdersInLocalStorage = (orders: Order[]) => {
    localStorage.setItem("orders", JSON.stringify(orders));
};

export const getOrdersFromLocalStorage = () => {
    const ordersStringified = localStorage.getItem("orders");

    if (ordersStringified) {
        return JSON.parse(localStorage.getItem("orders") as string);
    }

    return [];
}