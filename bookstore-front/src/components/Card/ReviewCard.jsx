import React from "react";
import {
  ContentBox,
  imgBox,
  reivewDescriptiton,
  reviewBox,
  reviewTitle,
  userImg,
} from "../Section/ReviewSection/ReviewContents.styles";

const ReviewCard = () => {
  const randomValue = () => Math.floor(Math.random() * 256);
  const r = randomValue();
  const g = randomValue();
  const b = randomValue();
  const rgb = `rgb(${r}, ${g}, ${b})`;

  return (
    <li css={reviewBox}>
      <div css={imgBox}>
        <div css={userImg(rgb)}></div>
      </div>
      <div css={ContentBox}>
        <div css={reviewTitle}>너무나도 재밌는 마법같은 책</div>
        <div css={reivewDescriptiton}>
          마법에 걸린 것 처럼 고혈압에 걸렸습니다
        </div>
      </div>
    </li>
  );
};

export default ReviewCard;
