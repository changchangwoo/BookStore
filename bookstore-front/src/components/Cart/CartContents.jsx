import { css } from "@emotion/react";
import Button from "../Button/Button";
import { cartDisplay, cartContainer, topBox, allCheck, cartList, cartCheck, selectedBox, confirmBox, itemPrice, totalPrice } from "./Cart_styles";
import CartItem from "./CartItem";
import ItemCheck from "./ItemCheck";


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
          </ul>
        </div>
        <ItemCheck/>
      </div>
    </>
  );
}

export default CartContents;
