import Button from "../Button/Button";
import { cartDisplay, cartContainer, topBox, allCheck, cartList, cartCheck } from "./Cart_styles";
import CartItem from "./CartItem";

function CartContents() {
  return (
    <>
      <div css={cartDisplay}>
        <div css={cartContainer}>
          <div css={topBox}>
            <div css={allCheck}>
              <input type="checkbox" />
              <h3>전체 선택</h3>
            </div>
            <Button title="전체 취소" color="red" width="100px" />
          </div>
          <ul css={cartList}>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
          </ul>
        </div>
        <div css={cartCheck}></div>
      </div>
    </>
  );
}

export default CartContents;
