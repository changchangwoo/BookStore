import { css } from "@emotion/react";
import Button from "../Button/Button";
import { cartContainer, topBox, allCheck, cartList, cartCheck, selectedBox, confirmBox, itemPrice } from "./Cart.styles";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { allChecked, deleteUserCartBooks, getUserCartBooks } from "../../reduces/cartBookSlice";
import { useDispatch, useSelector } from "react-redux";
import { openMessage } from "../../reduces/messageSlice";
import ItemCheck from "./ItemCheck";

function CartContents() {
  const dispatch = useDispatch()
  const cartBooks = useSelector((state) => state.cartBook.books)
  const [isChecked, setIsChecked] = useState(false);


  useEffect(()=> {
    dispatch(getUserCartBooks());
  }, [])

  const handleAllCheck = (event) => {
    if(event.target.checked) {
      setIsChecked(true)
      dispatch(allChecked(true))
    } else {
      setIsChecked(false)
      dispatch(allChecked(false))
    }
  }

  const handleAllDelete = () => {
    dispatch(deleteUserCartBooks());
    dispatch(openMessage({message : "장바구니의 모든 상품을 제거하였습니다"}))
  }

  return (
    <>
        <div css={cartContainer}>
          <div css={topBox}>
            <div css={allCheck}>
              <input type="checkbox" checked={isChecked} onChange={handleAllCheck}/>
              <h3>전체 선택</h3>
            </div>
            <Button title="전체 삭제" color="red" width="100px" active={true} onClick={handleAllDelete}/>
          </div>
          <ul css={cartList}>
            {
              cartBooks && 
                cartBooks.map((book)=>(
                  <CartItem 
                    key={book.id}
                    id={book.id}
                    book_id={book.book_id}
                    title={book.title}
                    author={book.author}
                    price={book.price}
                    quantity={book.quantity}
                    img={book.img}
                    checked={book.checked}
                    cartPage={true}
                  />
                ))
            }
          </ul>
        </div>
        <ItemCheck/>  
    </>
  );
}

export default CartContents;
