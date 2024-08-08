import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import './index.css';
import Layout from "./common/Layout";

const App: React.FC = () => {
    return (
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    );
  };

export default App;