import { css } from "@emotion/react";
import React from "react";

const sectionContainer = css`
  width: 100%;
  height: 700px;
  background-color: var(--mainBG);
  border-bottom: 1px solid var(--outline);
  padding-top: 50px;
  color: var(--fontColor);
  transition: all 0.2s;
`;

const contentContainer = css`
  max-width: 1200px;
  margin: auto;
`;

const sectionTitle = css`
  width: 990px;
  font-size: 24px;
  font-weight: bold;
  margin: auto;
  margin-bottom: 20px;
`;

const ReviewSection = ({ children }) => {
  return (
    <div css={sectionContainer}>
      <div css={contentContainer}>
      <div css={sectionTitle}>리뷰</div>
        {children}
        </div>
    </div>
  );
};

export default ReviewSection;
