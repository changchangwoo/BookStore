import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { orderContainer, topBox } from "./Order_styles";
import API from "../../utils/api";
import { formatDate } from "../../utils/formatDate";


function OrderContents() {
  const [orderList, setOrderList] = useState(null);
  useEffect(() => {
    API.get("orders/")
      .then((response) => {
        console.log(orderList)
        setOrderList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div css={orderContainer}>
        <div css={topBox}>
          <ul>
            <li> 주문 일자 </li>
            <li> 주문 번호 </li>
            <li> 수령인 </li>
            <li> 주소 </li>
            <li> 상품 </li>
          </ul>
        </div>
        {orderList &&
          orderList.map((order) => {
            return <OrderItem
              created_at={formatDate(order.created_at)}
              id={order.id}
              receiver={order.receiver}
              conatct={order.contact}
              address={order.address}
              total_quantity={order.total_quantity}
              book_title={order.book_title}
            />;
          })}
      </div>
    </>
  );
}

export default OrderContents;
