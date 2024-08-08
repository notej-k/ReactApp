import React, { useEffect, useState } from "react";
import { Order } from "../../types";
import { fetchCustomerById } from "../../../../api";
import { Customer } from "../../../../types";
import LoadingIndicator from "../../../common/LoadingIndicator";
import { useNavigate, useNavigation } from "react-router";

interface OrderRowProps {
  order: Order;
}

const OrderRow: React.FC<OrderRowProps> = ({ order }) => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isCustomerLoading, setIsCustomerLoading] = useState(false);

  const quantity = order.items.reduce((sum, item) => {
    return sum + parseInt(item.quantity);
  }, 0);

  useEffect(() => {
    const getData = async () => {
      setIsCustomerLoading(true);
      const data = await fetchCustomerById(order["customer-id"]);
      setCustomer(data);
      setIsCustomerLoading(false);
    };

    getData();
  }, []);

  return (
    <tr
      className="cursor-pointer"
      onClick={() => navigate(`/orders/${order.id}`)}
      key={`${order.id}`}
    >
      <td className="py-2 px-4 border-b">{order.id}</td>
      <td className="py-2 px-4 border-b">{customer?.name ?? "..."}</td>
      <td className="py-2 px-4 border-b">{quantity}</td>
      <td className="py-2 px-4 border-b">${order.total}</td>
    </tr>
  );
};

export default OrderRow;
