import React, { useEffect } from "react";
import { Order } from "../types";
import { fetchAllOrders } from "../../../api";
import LoadingIndicator from "../../common/LoadingIndicator";
import OrderTable from "./OrderTable";

const OrderList: React.FC = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await fetchAllOrders();
      setOrders(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      {isLoading ? (
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
