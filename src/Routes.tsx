import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderList from "./components/orders/List";
import OrderDetail from "./components/orders/Detail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home page</div>} />
      <Route path="/orders" element={<OrderList />} />
      <Route path="/orders/:id" element={<OrderDetail />} />
      <Route path="*" element={<div>Not found!</div>} />
    </Routes>
  );
};

export default AppRoutes;
