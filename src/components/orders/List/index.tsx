import React, { useEffect, useReducer } from "react";
import LoadingIndicator from "../../common/LoadingIndicator";
import OrderTable from "./OrderTable";
import { orderReducer } from "../reducer";
import { getOrdersFromLocalStorage } from "../../../helpers/LocalStorage";

const OrderList: React.FC = () => {
  const initialState = { orders: getOrdersFromLocalStorage() };
  const [state] = useReducer(orderReducer, initialState);
  const orders = state.orders;

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      {!state.orders ? (
        <LoadingIndicator />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4 text-center">Orders</h1>
          <OrderTable orders={orders} />
        </>
      )}
    </div>
  );
};

export default OrderList;
