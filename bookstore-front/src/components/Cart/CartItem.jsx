
import { useDispatch } from "react-redux";
import {
  cartItem,
  cartImg,
  titleBox,
  qunaitityBox,
  calculButton,
  cartPrice,
  cartTitle,
  sub_title,
} from "./Cart_styles";

import { useCallback, useMemo, useState } from "react";
import { checked } from "../../reduces/cartBookSlice";


function CartItem(
  {
    id,
    book_id,
    title,
    author,
    price,
    quantity,
    img
  }
) {
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();
  const upCount = useCallback(() => {
    setCount(count + 1);
  });
  const downCount = useCallback(() => {
    if (count <= 0) return;
    setCount(count - 1);
  });
  const handleCheck = (e) => {
    dispatch(checked(e.target.value))
  }
  return (
    <>
      <li css={cartItem}>
        <input type="checkbox" value={id} onChange={handleCheck}/>
        <img
          src={img}
          css={cartImg}
        ></img>
        <div css={titleBox}>
          <div css={cartTitle}>{title}</div>
          <div css={sub_title}>{author}</div>
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
            <div css={cartPrice}>{price * count}원 </div>
          </div>
        </div>
      </li>
    </>
  );
}
export default CartItem;
