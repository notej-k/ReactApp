import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Order } from "../types";
import { fetchOrderById } from "../../../api";
import LoadingIndicator from "../../common/LoadingIndicator";
import OrderInfo from "./OrderInfo";

const OrderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [isOrderLoading, setIsOrderLoading] = useState(false);

  useEffect(() => {
    const getOrderById = async () => {
      setIsOrderLoading(true);
      const data = id ? await fetchOrderById(id) : null;
      setOrder(data);
      setIsOrderLoading(false);
    };

    getOrderById();
  }, [id]);

  if (isOrderLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="container flex flex-col gap-4 mx-auto p-4 bg-white rounded-lg shadow-md max-w-xl">
      {order && (
        <>
          <OrderInfo order={order} />
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
