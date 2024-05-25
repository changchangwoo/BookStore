import { css } from "@emotion/react";
import Button from "../Button/Button";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../utils/api";
import { openMessage } from "../../reduces/messageSlice";
import parse from 'html-react-parser';


const sectionContainer = css`
  width: 611px;
  height: 526px;
  background-color: #f9f9f9;
  border: 1px solid #e1e1e1;
  padding: 50px 0px 50px 0px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 26px;
    margin: 0;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 20px;
    margin-top: 10px;
    font-weight: 600;
    color: #8f8d8d;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    width: 400px;
    height: 103px;
    font-size: 13px;
    font-weight: 300;
    margin-top: 45px;
    margin-bottom: 45px;
    overflow-x: auto;
    
  }
`;

const quantitiyBox = css`
  width: 100%;
  height: 90px;   
  background-color: white;
  border: 1px solid #e1e1e1;
  border-left: none;
  border-right: none;
  display: flex;
  padding: 20px 20px 20px 50px;
  box-sizing: border-box;
`;
const buttonContainer = css`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 20px;
`;
const quantitiyController = css`
  flex: 0.5;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;
const calculPrice = css`
  flex: 0.5;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: right;
`;
const calculButton = css`
  margin: 20px;
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`;

function DetailCard({ id, title, author, detail, price }) {
  const [count, setCount] = useState(1);
  const [buttonActive, setbuttonActive] = useState(true);
  const [likesCount, setLikesCount] = useState(0);
  const [likesCheck, setLikesCheck] = useState(false);
  const loginCheck = useSelector((state) => state.user.loginCheck);
  const totalprice = price;
  const dispatch = useDispatch();

  useEffect(() => {
    API.get(`/likes/${id}`).then((response) => {
        console.log(response.data.liked);
        if (response.data.liked) {
          setLikesCheck(true);
        } else {
          setLikesCheck(false);
        }
      })
      .catch((err) => {
        console.log(err);
      }); 
  }, []);

  const likeHandler = () => {
    if (likesCheck) {
      API.delete(`/likes/${id}`)
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) setLikesCheck(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('추가 동작')
      API.post("/likes", {
        id: id,
      })
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) setLikesCheck(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const upCount = useCallback(() => {
    setbuttonActive(true);
    setCount(count + 1);
  });
  const downCount = useCallback(() => {
    if (count <= 1) {
      if (count === 0) return;
      setCount(count - 1);
      setbuttonActive(false);
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
          <div css={calculPrice}>{totalprice * count} 원 </div>
        </div>
        <div css={buttonContainer}>
          <Button
            title="♡"
            width="90px"
            marginRight="20px"
            active={loginCheck}
            onClick={likeHandler}
            color={likesCheck ? "red" : "blue"}
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
