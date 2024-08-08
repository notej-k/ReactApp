import React from "react";
import { OrderItem as OrderItemType } from "../../types";

interface OrderItemsTableProps {
  orderItems: OrderItemType[];
  onRemoveItem: (productId: string | undefined) => void;
}

const OrderItemsTable: React.FC<OrderItemsTableProps> = ({
  orderItems,
  onRemoveItem,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="text-left min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Product ID</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Unit Price</th>
            <th className="py-2 px-4 border-b">Total</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item, idx) => (
            <tr key={`${item.id}_${item['product-id']}_${idx}`}>
              <td className="py-2 px-4 border-b">{item["product-id"]}</td>
              <td className="py-2 px-4 border-b">{item.quantity}</td>
              <td className="py-2 px-4 border-b">{item["unit-price"]}</td>
              <td className="py-2 px-4 border-b">{item.total}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => onRemoveItem(item["product-id"])}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderItemsTable;
