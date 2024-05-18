import { css } from "@emotion/react";
import Button from "../Button/Button";
import { cartDisplay, cartContainer, topBox, allCheck, cartList, cartCheck, selectedBox, confirmBox, itemPrice, totalPrice } from "./Cart_styles";
import CartItem from "./CartItem";
import ItemCheck from "./ItemCheck";
import { useEffect, useState } from "react";
import { getUserCartBooks } from "../../reduces/cartBookSlice";
import { useDispatch, useSelector } from "react-redux";

function CartContents() {
  const dispatch = useDispatch()
  const cartBooks = useSelector((state) => state.cartBook.books)
  useEffect(()=> {
    dispatch(getUserCartBooks());
  }, [])

  return (
    <>
      <div css={cartDisplay}>
        <div css={cartContainer}>
          <div css={topBox}>
            <div css={allCheck}>
              <input type="checkbox" />
              <h3>전체 선택</h3>
            </div>
            <Button title="전체 삭제" color="red" width="100px" />
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
                  />
                ))
            }
          </ul>
        </div>
        <ItemCheck/>
      </div>
    </>
  );
}

export default CartContents;
