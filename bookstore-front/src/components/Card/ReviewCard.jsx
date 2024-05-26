import React from "react";
import {
  ContentBox,
  imgBox,
  reivewDescriptiton,
  reviewBox,
  reviewDate,
  reviewTitle,
  titleBox,
  userImg,
} from "../Section/ReviewSection/ReviewContents.styles";

const ReviewCard = (
  {
    email,
    id,
    rgb,
    title,
    comment,
    date
  }
) => {

  return (
    <li css={reviewBox}>
      <div css={imgBox}>
        <div css={userImg(rgb)}>{email[0]}</div>
      </div>
      <div css={ContentBox}>
        <div css={titleBox}>
        <div css={reviewTitle}>
          {email}
          </div>
          <div css={reviewDate}>{date}</div>
          </div>
        <div css={reivewDescriptiton}>
         {comment}
        </div>
      </div>
    </li>
  );
};

export default ReviewCard;
