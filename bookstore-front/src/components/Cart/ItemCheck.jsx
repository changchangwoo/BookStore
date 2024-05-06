import {
  cartCheck,
  selectedBox,
  confirmBox,
  totalPrice,
  itemPrice,
} from "./Cart_styles";
import Button from "../Button/Button";
import { css } from "@emotion/react";

const finalCheck = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
  input {
    width: 14px;
    height: 14px;
  }
`;
function ItemCheck(props) {
  return (
    <>
      <div css={cartCheck}>
        <ul css={selectedBox}>
          <li>생각 중독 </li>
          <li>잘하고 싶어서 떄묻은 너에게 </li>
          <li>여행의 이유 </li>
        </ul>
        <div css={confirmBox}>
          <div css={itemPrice("black")}>상품 91000원</div>
          <div css={itemPrice("#8f8d8d")}>배송비 3000원</div>
          <div css={totalPrice}>총 94000원</div>
          {props.delivery && (
            <form css={finalCheck}>
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">결제에 동의합니다</label>{" "}
            </form>
          )}
          <Button title="주문 하기" width="150px" />
        </div>
      </div>
    </>
  );
}

export default ItemCheck;
