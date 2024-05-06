import DeliveryContents from "../components/Delivery/DeliveryContents";
import CartSection from "../components/Section/CartSection";
function Delivery() {
  return (
    <>
      <CartSection title="배송 정보">
        <DeliveryContents/>
      </CartSection>
    </>
  );
}

export default Delivery;
