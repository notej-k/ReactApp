import React, { useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrderInfo from "./OrderInfo";
import OrderItemsTable from "./OrderItemsTable";
import { orderReducer } from "../reducer";
import { addItem, removeItem } from "../actions";
import { getOrdersFromLocalStorage } from "../../../helpers/LocalStorage";
import ProductSelector from "./ProductSelector";
import products from "../../../data/products";
import { Product } from "../../../types";
import { toast } from "react-toastify";

const OrderDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const initialState = { orders: getOrdersFromLocalStorage() };
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const order = state.orders.find((stateOrder) => stateOrder.id === id);
  const [hasChanges, setHasChanges] = useState(false);

  const handleRemoveItem = (productId: string | undefined) => {
    if (!order) return;
    setHasChanges(true);
    dispatch(removeItem(order.id, productId));
  };

  const handleAddItem = (product: Product, quantity: number) => {
    if (!order) return;
    setHasChanges(true);
    dispatch(addItem(order.id, product.id, quantity, product.price));
  };

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully!");
    navigate("/");
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
            disabled={!hasChanges}
            onClick={handlePlaceOrder}
            className={`mt-4 py-2 px-4 rounded w-full ${hasChanges ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default OrderDetail;
