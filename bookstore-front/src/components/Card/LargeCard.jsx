import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const sectionContainer = css`
  width: 480px;
  height: 438px;
  background-color: var(--subBG);
  border: 1px solid var(--outLine);
  color: var(--fontColor);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const imgBox = css`
  width: 230px;
  height: 90%;
  border: 1px solid var(--outLine);
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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h2 {
    font-size: 16px;
    margin: 0;
    margin-top: 10px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
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

function LargeCard({ id, title, author, bookPrice, detail, img, category_id }) {
  return (
    <>
      <Link to={`/detail?category_id=${category_id}&book_id=${id}`}>
        <div css={sectionContainer}>
          <img src={img} css={imgBox}></img>
          <div css={descriptionBox}>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <div css={simpleDescript}>
              {typeof detail === "string" ? parse(detail) : detail}
            </div>
            <div css={price}>{bookPrice}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default LargeCard;
