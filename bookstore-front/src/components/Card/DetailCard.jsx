import { css } from "@emotion/react";
import Button from "../Button/Button";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../utils/api";
import { openMessage } from "../../reduces/messageSlice";
import parse from 'html-react-parser';
import { addLikes, removeLikes } from "../../reduces/detailBookSlice";
import { buttonContainer, calculButton, calculPrice, quantitiyBox, quantitiyController, sectionContainer } from "./DetailCard.styles";

function DetailCard({ book, loginCheck }) {
  const { id, title, author, detail, price, likes, liked } = book;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const likeHandler = () => {
    if (liked) {
      dispatch(removeLikes({bookId: id}))
    } else {
      dispatch(addLikes({bookId: id}))
    }
  };
  
  const upCount = useCallback(() => {
    setCount(count + 1);
  });
  const downCount = useCallback(() => {
    if (count <= 1) {
      if (count === 0) return;
      setCount(count - 1);
    } else {
      setCount(count - 1);
    }
  });

  const addToCart = () => {
    API.post("/carts/", {
      book_id: id,
      quantity: count,
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(
            openMessage({
              message: `${title} ${count} 권이 성공적으로 장바구니에 담겼습니다`,
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div css={sectionContainer}>
        <h1>{title}</h1>
        <h2>{author} </h2>
        <h3>{typeof detail === 'string' ? parse(detail) : detail}</h3>
        <div css={quantitiyBox}>
          <div css={quantitiyController}>
            <span css={calculButton} onClick={downCount}>
              {" "}
              -{" "}
            </span>
            <span> {count} </span>
            <span css={calculButton} onClick={upCount}>
              {" "}
              +{" "}
            </span>
          </div>
          <div css={calculPrice}>{price * count} 원 </div>
        </div>
        <div css={buttonContainer}>
          <Button
            title={liked ? "♥ "+likes:"♡ "+likes}
            width="90px"
            marginRight="20px"
            active={loginCheck}
            onClick={likeHandler}
            color={liked ? "red" : "blue"}
          />
          <Button
            onClick={addToCart}
            title="장바구니 담기"
            width="150px"
            marginRight="20px"
            active={loginCheck}
          />
        </div>
      </div>
    </>
  );
}

export default DetailCard;
