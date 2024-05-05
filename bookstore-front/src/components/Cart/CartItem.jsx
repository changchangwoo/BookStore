
import {
  cartItem,
  cartImg,
  titleBox,
  qunaitityBox,
  calculButton,
  price,
} from "./Cart_styles";

import { useCallback, useMemo, useState } from "react";


function CartItem() {
  const [count, setCount] = useState(1);
  const totalprice = 13000;
  const upCount = useCallback(() => {
    setCount(count + 1);
  });
  const downCount = useCallback(() => {
    if (count <= 0) return;
    setCount(count - 1);
  });
  return (
    <>
      <li css={cartItem}>
        <input type="checkbox" />
        <img
          src={"https://image.yes24.com/goods/126120766/XL"}
          css={cartImg}
        ></img>
        <div css={titleBox}>
          <h1>제철 행복</h1>
          <h2>김신지</h2>
          <div css={qunaitityBox}>
            <span css={calculButton} onClick={downCount}>
              {" "}
              -{" "}
            </span>
            <span> {count} </span>
            <span css={calculButton} onClick={upCount}>
              {" "}
              +{" "}
            </span>
            <div css={price}>{totalprice * count}원 </div>
          </div>
        </div>
      </li>
    </>
  );
}
export default CartItem;
