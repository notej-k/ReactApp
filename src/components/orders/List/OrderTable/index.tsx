import React from "react";
import { Order } from "../../types";
import { Link } from "react-router-dom";
import OrderRow from "../OrderRow";

interface OrderTableProps {
  orders: Order[];
}

const OrderTableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="py-2 px-4 border-b text-left w-1/6">Order ID</th>
        <th className="py-2 px-4 border-b text-left w-1/6">Customer ID</th>
        <th className="py-2 px-4 border-b text-left w-1/6">Quantity</th>
        <th className="py-2 px-4 border-b text-left w-1/6">Total</th>
      </tr>
    </thead>
  );
};

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  if (!orders) {
    return null;
  }

  return (
    <div className="mb-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border mt-2">
          <OrderTableHeader />
          <tbody>
            {orders.map((order) => (
              <OrderRow order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
