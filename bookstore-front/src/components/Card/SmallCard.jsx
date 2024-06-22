import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { getDetailBook } from "../../reduces/detailBookSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  bookPrice,
  descriptionBox,
  imgBox,
  sectionContainer,
  simpleDescript,
} from "./SmallCard.styles";

function SmallCard({ book }) {
  const { title, author, summary, price, category_id, img, id, query } = book;
  
  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span css={highlightStyle} key={index}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <Link to={`/detail?category_id=${category_id}&book_id=${id}`}>
        <div css={sectionContainer}>
          <img css={imgBox} src={img} alt={title} />
          <div css={descriptionBox}>
            <h1>{highlightText(title, query)}</h1>
            <h2>{author}</h2>
            <div css={simpleDescript}>{summary}</div>
            <div css={bookPrice}>{price}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SmallCard;
