import CartItem from "../Cart/CartItem";
import ItemCheck from "../Cart/ItemCheck";
import { useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { deliveryContainer, deliveryDisplay, deliveryInfo, itemList } from "./Delivery.styles";

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
      </div>
      <ItemCheck
          delivery={true}
          deliveryInfo={{name, address, contact}}
          cartBooks={cartBooks}
        />
    </>
  );
}

export default DeliveryContents;
