import { css } from "@emotion/react";
import { getDetailBook } from "../../reduces/detailBookSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const sectionContainer = css`
  width: 480px;
  height: 438px;
  background-color: white;
  border: 1px solid #e1e1e1;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const imgBox = css`
  width: 230px;
  height: 90%;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
`;

const descriptionBox = css`
  width: 190px;
  height: 90%;
  h1 {
    font-size: 20px;
    margin: 0;
    font-weight: bold;
  }
  h2 {
    font-size: 16px;
    margin: 0;
    margin-top: 10px;
    font-weight: 500;
    color: #8f8d8d;
  }
`;

const simpleDescript = css`
  margin-top: 50px;
  width: 190px;
  height: 200px;
  font-size: 14px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const price = css`
  margin-top: 30px;
  font-size: 14px;
`;

function LargeCard({ id, title, author, bookPrice, detail, img }) {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handleCard = () => {
    dispatch(
      getDetailBook(id)
    )
    navigator("/detail")
  }

  return (
    <>
      <div css={sectionContainer} onClick={handleCard}>
        <img src={img} css={imgBox}></img>
        <div css={descriptionBox}>
          <h1>{title}</h1>
          <h2>{author}</h2>
          <div css={simpleDescript}>{detail}</div>
          <div css={price}>{bookPrice}</div>
        </div>
      </div>
    </>
  );
}

export default LargeCard;
