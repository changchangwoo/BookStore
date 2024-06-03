import { css } from "@emotion/react";
import React from "react";

const sectionContainer = css`
  width: 100%;
  height: 800px;
  background-color: var(--mainBG);
  border-bottom: 1px solid var(--outline);
  padding-top: 50px;
  color: var(--fontColor);
  transition: all 0.2s;

`;

const contentContainer = css`
  max-width: 1000px;
  margin: auto;
  border: 1px solid var(--outLine);
  height: 600px;
  background-color: var(--MainBG);
  border-radius: 8px;


  @media (max-width: 768px) {
    width: 500px;
    margin-bottom: 40px;
  }
`;

const sectionTitle = css`
  padding-left: 10px;
  max-width: 1000px;
  font-size: 24px;
  font-weight: bold;
  margin: auto;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 500px;
    margin-bottom: 40px;
  }
`;

const ReviewSection = ({ children }) => {
  return (
    <div css={sectionContainer}>
      <div css={sectionTitle}>리뷰</div>
      <div css={contentContainer}>{children}</div>
    </div>
  );
};

export default ReviewSection;
