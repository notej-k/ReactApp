// mock fetching data from server.
import { Customer } from "../types";
import { Order } from "../components/orders/types";
import customers from "../data/customers";
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

export const fetchCustomerById = (customerId: string): Promise<Customer> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const customer = customers.find((customer) => customer.id === customerId);
      if (customer) {
        resolve(customer);
      } else {
        reject(new Error("Customer not found"));
      }
    }, 2000);
  });
};