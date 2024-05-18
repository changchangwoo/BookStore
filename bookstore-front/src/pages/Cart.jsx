import CartSection from "../components/Section/CartSection";
import CartContents from "../components/Cart/CartContents";

function Cart() {
  return (
    <>
      <CartSection title="장바구니">
        <CartContents/>
      </CartSection>
    </>
  );
}

export default Cart;
