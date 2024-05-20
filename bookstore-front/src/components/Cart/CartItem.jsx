import { useDispatch, useSelector } from "react-redux";
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

import { useCallback, useMemo, useRef, useState } from "react";
import { checked, downCount, upCount } from "../../reduces/cartBookSlice";

function CartItem({
  id,
  book_id,
  title,
  author,
  price,
  quantity,
  img,
  cartPage
}) {
  
  const dispatch = useDispatch();

  const upHandler = useCallback(() => {
    dispatch(upCount({ id: id }));
  });
  const downHandler = useCallback(() => {
    dispatch(downCount({ id: id }));
  });

  const checkBoxRef = useRef(null);
  const checkHandler = (e) => {
    dispatch(checked({ checked: checkBoxRef.current.checked, id: id }));
  };
  return (
    <>
      <li css={cartItem}>
        {cartPage &&
        <input type="checkbox" onChange={checkHandler} ref={checkBoxRef} />
        }
        <img src={img} css={cartImg}></img>
        <div css={titleBox}>
          <div css={cartTitle}>{title}</div>
          <div css={sub_title}>{author}</div>
          <div css={qunaitityBox}>
            {cartPage && (
              <>
                <span css={calculButton} onClick={downHandler}>
                  {" "}
                  -{" "}
                </span>
                <span> {quantity} </span>
                <span css={calculButton} onClick={upHandler}>
                  {" "}
                  +{" "}
                </span>
              </>
            )}
            <div css={cartPrice}>{price * quantity}원 </div>
          </div>
        </div>
      </li>
    </>
  );
}
export default CartItem;
