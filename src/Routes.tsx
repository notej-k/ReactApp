import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home page</div>} />
      <Route path="/orders" element={<div>Orders list page</div>} />
      <Route path="/orders/:id" element={<div>Orders detail page</div>} />
      <Route path="*" element={<div>Not found!</div>} />
    </Routes>
  );
};

export default AppRoutes;