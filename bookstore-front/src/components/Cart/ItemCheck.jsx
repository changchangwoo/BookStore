import { cartCheck, selectedBox, confirmBox, itemPrice, finalPrice } from "./Cart_styles";
import Button from "../Button/Button";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { act, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { openMessage } from "../../reduces/messageSlice";
import { setOrderInfo } from "../../reduces/orderSlice";
import API from "../../utils/api";

const finalCheck = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  input {
    width: 14px;
    height: 14px;
  }
`;
function ItemCheck({
  delivery: deliveryCheck,
  deliveryInfo,
  cartBooks
}) {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cartBook.books);
  const [totalPrice, setTotalPrice] = useState(0);
  const [buttonActive, setButtonActive] = useState(true)

  const handleGoDelviery = () => {
    if(totalPrice <= 0) {
      dispatch(openMessage({message : "주문 수량을 다시 한번 확인해주세요"}))
      return
    }
    navigator("/delivery")
  }

  const handleDelivery = () => {
    if(deliveryInfo.name === '' || deliveryInfo.address === '' || deliveryInfo.contact === '') {
      dispatch(openMessage({message : "배송 정보가 비어있는지 확인해주세요"}))
      return
    } else {
      const items = cartBooks.map((book) => book.id)
      const totalQuantity = cartBooks.reduce((sum, book) => {
        return sum + book.quantity;
      }, 0);
      const delivery = deliveryInfo;
      const firstBookTitle = cartBooks[0].title
      API.post("orders/", {
        items : items,
        delivery : delivery,
        firstBookTitle : firstBookTitle,
        totalQuantity : totalQuantity,
        totalPrice : totalPrice
      }).then(response => {
        if(response.status === 200) {
          dispatch(openMessage({message : '정상적으로 주문이 완료되었어요'}))
          navigator("/")
        }
      }).catch(err => {
        dispatch(openMessage({message : '주문 중 오류가 발생했습니다.'}))
    })
    }
  }

  const finalCheckHandler = (e) => {
    if(e.target.checked) setButtonActive(true)
    else setButtonActive(false)
  }

  useEffect(() => {
    if (cartItem.length > 0) {
      let price = cartItem.reduce((sum, item) => {
        if (item.checked) {
          sum += item.price * item.quantity; 
        }
        return sum;
      }, 0);
      setTotalPrice(price);
    }
  }, [cartItem]);

  useEffect(()=>{
    if(deliveryCheck) setButtonActive(false)
  }, [])

  

  return (
    <>
      <div css={cartCheck}>
        <ul css={selectedBox}>
          {cartItem.map((cart) => {
            if (cart.checked === true) {
              return (
                <li key={cart.id}>
                  {cart.title} * {cart.quantity}
                </li>
              );
            }
            return null;
          })}
        </ul>
        <div css={confirmBox}>
          <div css={itemPrice}>상품 {totalPrice} 원</div>
          <div css={itemPrice}>배송비 3000 원</div>
          <div css={finalPrice}>총 {totalPrice + 3000}원</div>
          {deliveryCheck && (
            <form css={finalCheck}>
              <input type="checkbox" id="agree" onClick={finalCheckHandler} />
              <label htmlFor="agree">결제에 동의합니다</label>{" "}
            </form>
          )}
          <Button title="주문 하기" width="150px" marginTop="30px" active={buttonActive} onClick={
            deliveryCheck ? handleDelivery : handleGoDelviery}/>
        </div>
      </div>
    </>
  );
}

export default ItemCheck;
