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
} from "./Cart.styles";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { oneChecked, downCount, upCount } from "../../reduces/cartBookSlice";

function CartItem({
  id,
  book_id,
  title,
  author,
  price,
  quantity,
  img,
  cartPage,
  checked
}) {
  
  const dispatch = useDispatch();
  const upHandler = useCallback(() => {
    dispatch(upCount({ id: id }));
  });
  const downHandler = useCallback(() => {
    if(quantity < 1) return
    dispatch(downCount({ id: id }));
  });
  const [isChecked, setIsChecked] = useState(checked)
  useEffect(()=>{
    setIsChecked(checked)
  })
  const checkHandler = (e) => {
    setIsChecked(!isChecked)
    dispatch(oneChecked({ checkType: e.target.checked, id: id }));
  };
  return (
    <>
      <li css={cartItem}>
        {cartPage &&
        <input type="checkbox" checked={isChecked} onChange={checkHandler}/>
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
