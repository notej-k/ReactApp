import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import OrderInfo from "./OrderInfo";
import OrderItemsTable from "./OrderItemsTable";
import { orderReducer } from "../reducer";
import { removeItem } from "../actions";
import { getOrdersFromLocalStorage } from "../../../helpers/LocalStorage";

const OrderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const initialState = { orders: getOrdersFromLocalStorage() };
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const order = state.orders.find((stateOrder) => stateOrder.id === id);

  const handleRemoveItem = (productId: string | undefined) => {
    if (!order) return;
    dispatch(removeItem(order.id, productId));
  };
    if (!order) return;
    dispatch(removeItem(order.id, itemId));
  };

  return (
    <div className="container flex flex-col gap-4 mx-auto p-4 bg-white rounded-lg shadow-md max-w-xl">
      {order && (
        <>
          <OrderInfo order={order} />
          <OrderItemsTable
            orderItems={order.items}
            onRemoveItem={handleRemoveItem}
          />
          <ProductSelector products={products} onAddItem={handleAddItem} />
          <p className="mt-4 font-semibold">Total: ${order.total}</p>
          <button
            disabled
            className="mt-4 py-2 px-4 rounded w-full bg-gray-400 text-gray-700 cursor-not-allowed"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default OrderDetail;
