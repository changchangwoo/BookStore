import React, { useEffect, useRef, useState } from "react";
import {
  commentBox,
  commentInput,
  reviewList,
  sectionContainer,
  topBox,
} from "./ReviewContents.styles";
import ReviewCard from "../../Card/ReviewCard";
import Button from "../../Button/Button";
import API from "../../../utils/api";
import { useSelector } from "react-redux";

const ReviewContents = ({ id }) => {
  const loginCheck = useSelector((state) => state.user.loginCheck);
  const [inputComment, setInputComment] = useState("");
  const [initialRender, setInitialRender] = useState(true);
  const [reviews, setReviews] = useState([]);
  const reviewsEndRef = useRef(null);

  const fetchReviews = async () => {
    try {
      const response = await API.get("/reviews", {
        params: { bookId: id },
      });
      setReviews(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReviews();
    setInitialRender(true)
  }, [id]);

  useEffect(() => {
    if (!initialRender) {
      scrollToBottom();
    }
  }, [reviews]);



  const handleAddComment = (event) => {
    console.log("handle");
    setInitialRender(false);
    API.post("/reviews", {
      bookId: id,
      comment: inputComment,
    })
      .then((res) => {
        fetchReviews();
        setInputComment("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const scrollToBottom = () => {
    reviewsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onChangeInputComment = (e) => {
    setInputComment(e.target.value);
  };

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
          <h4>{reviews ? reviews.length : 0}</h4>
        </li>
      </ul>
      <ul css={reviewList}>
        {reviews &&
          reviews.map((review) => {
            return (
              <ReviewCard
                key={review.id}
                id={review.id}
                email={review.email}
                comment={review.comment}
                date={review.date}
                rgb={review.rgb}
              />
            );
          })}
        <div ref={reviewsEndRef} />
      </ul>
      <div css={commentBox}>
        <input
          css={commentInput}
          placeholder="한 줄 리뷰를 남겨보세요"
          onChange={onChangeInputComment}
        ></input>
        <Button
          type="submit"
          width="120px"
          title="리뷰 등록"
          active={loginCheck}
          onClick={handleAddComment}
        />
      </div>
    </div>
  );
};

export default ReviewContents;
