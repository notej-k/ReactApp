import React from "react";
import { Order } from "../../types";

interface OrderInfoProps {
  order: Order;
}

const OrderInfo: React.FC<OrderInfoProps> = ({ order }) => {
  return (
    <div className="mb-4 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold">Order Information</h2>
      <p>
        <strong>Order ID:</strong> {order.id}
      </p>
      <p>
        <strong>Customer ID:</strong> {order["customer-id"]}
      </p>
      <p>
        <strong>Total::</strong> {order.total}
      </p>
    </div>
  );
};

export default OrderInfo;
