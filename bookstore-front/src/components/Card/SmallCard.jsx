import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { getDetailBook, rerender } from "../../reduces/detailBookSlice";
import { useNavigate, useLocation } from "react-router-dom";

const sectionContainer = css`
cursor: pointer;
  width: 230px;
  height: 438px;
  background-color: white;
  border: 1px solid #e1e1e1;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;

const imgBox = css`
  width: 100%;
  height: 260px;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
  object-fit: cover;
`;

const descriptionBox = css`
  width: 190px;
  height: 90%;
  h1 {
    font-size: 16px;
    margin: 0;
    margin-top: 20px;
    font-weight: bold;
    height: 20px;
    overflow: hidden; /* 넘친 텍스트를 숨김 */
    text-overflow: ellipsis; /* 생략 부호 (...) 표시 */
  }
  h2 {
    font-size: 14px;
    margin: 0;
    margin-top: 5px;
    font-weight: 500;
    color: #8f8d8d;
  }
`;

const simpleDescript = css`
  margin-top: 10px;
  width: 100%;
  height: 30px;
  font-size: 13px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const bookPrice = css`
  margin-top: 20px;
  font-size: 14px;
`;

function SmallCard({title, author, summary, price, category_id, img, id}) {
  const navigator = useNavigate();
  const location = useLocation();
  const handleCard = () => {
    const currentUrl = `/detail/${category_id}/${id}`;
    if (location.pathname === currentUrl) {
      // setReload((prev) => prev + 1); 
    } else {
      navigator(currentUrl);
    }
  };
  return (
    <>
      <div css={sectionContainer} onClick={handleCard}>
        <img css={imgBox} src={img}></img>
        <div css={descriptionBox}>
          <h1>{title}</h1>
          <h2>{author}</h2>
          <div css={simpleDescript}>{summary}</div>
          <div css={bookPrice}>{price}</div>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
