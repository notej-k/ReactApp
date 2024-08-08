import React, { useEffect, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import "./index.css";
import Layout from "./components/common/Layout";
import { initialOrderState, orderReducer } from "./components/orders/reducer";
import orders from "./data/orders";
import { initializeOrders } from "./components/orders/actions";
import { storeOrdersInLocalStorage } from "./helpers/LocalStorage";

const App: React.FC = () => {
  const [, dispatch] = useReducer(orderReducer, initialOrderState);

  useEffect(() => {
    const ordersInLocalStorage = localStorage.getItem("orders");
    if (!ordersInLocalStorage) {
      storeOrdersInLocalStorage(orders);
    }

    dispatch(initializeOrders(orders));
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
