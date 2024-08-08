// mock fetching data from server.
import { Order } from "../components/orders/types";
import orders from "../data/orders";

const fetchOrderById = (orderId: string): Promise<Order> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const order = orders.find((order) => order.id === orderId);
      if (order) {
        resolve(order);
      } else {
        reject(new Error("Order not found"));
      }
    }, 2000);
  });
};

export const fetchAllOrders = (): Promise<Order[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orders);
    }, 2000);
  });
};