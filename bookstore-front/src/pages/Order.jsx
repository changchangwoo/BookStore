import OrderContents from "../components/Order/OrderContents";
import CartSection from "../components/Section/CartSection";
function Order() {
  return (
    <>
      <CartSection title="주문 목록">
        <OrderContents/>
      </CartSection>
    </>
  );
}

export default Order;
