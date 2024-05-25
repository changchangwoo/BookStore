import React from "react";
import {
    commentBox,
  reviewList,
  sectionContainer,
  topBox,
} from "./ReviewContents.styles";
import ReviewCard from "../../Card/ReviewCard";
import Button from "../../Button/Button";

const ReviewContents = () => {

  return (
    <div css={sectionContainer}>
      <ul css={topBox}>
        <li>
          <h3>평점</h3>
          <h4>5.1</h4>
        </li>
        <li>
          <h3>소요시간</h3>
          <h4>1h 30m</h4>
        </li>
        <li>
          <h3>리뷰</h3>
          <h4>31</h4>
        </li>
      </ul>
      <ul css={reviewList}>
        <ReviewCard/>

        <ReviewCard/>
      </ul>
    </div>
  );
};

export default ReviewContents;
