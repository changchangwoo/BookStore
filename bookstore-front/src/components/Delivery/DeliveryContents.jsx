import { css } from "@emotion/react";
import CartItem from "../Cart/CartItem";
import ItemCheck from "../Cart/ItemCheck";
import { useSelector } from "react-redux";
import useInput from "../../hooks/useInput";

const deliveryDisplay = css`
  display: flex;
`;

const deliveryContainer = css`
  width: 650px;
  height: 765px;
  overflow: hidden;
  display: flex;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
`;
const deliveryInfo = css`
  width: 100%;
  height: 185px;
  font-size: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #e1e1e1;
    height: 35px;
  }
`;

const itemList = css`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 50px;
  max-height: 500px;
  overflow-y: scroll;
  border-radius: 8px;
`;

function DeliveryContents() {
  const [name, onChangeName] = useInput("");
  const [address, onChangeAddress] = useInput("");
  const [contact, onChangeContact] = useInput("");

  const cartBooks = useSelector((state) =>
    state.cartBook.books.filter((book) => book.checked)
  );
  return (
    <>
      <div css={deliveryDisplay}>
        <div css={deliveryContainer}>
          배송지
          <div css={deliveryInfo}>
            <input placeholder="받는 분" onChange={onChangeName}></input>
            <input placeholder="주소" onChange={onChangeAddress}></input>
            <input placeholder="연락처" onChange={onChangeContact}></input>
          </div>
          주문상품
          <div css={itemList}>
            {cartBooks &&
              cartBooks.map((book) => (
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
                />
              ))}
          </div>
        </div>
        <ItemCheck
          delivery={true}
          deliveryInfo={{name, address, contact}}
          cartBooks={cartBooks}
        />
      </div>
    </>
  );
}

export default DeliveryContents;
