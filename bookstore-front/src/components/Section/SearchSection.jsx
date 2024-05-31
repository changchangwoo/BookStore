import { css } from "@emotion/react";
import React from "react";

const sectionContainer = css`
  width: 100%;
  height: auto;
  /* background-color: var(--mainBG); */
  color: var(--fontColor);
  margin: auto;
  overflow: hidden;
  border-bottom: 1px solid var(--outLine);
  transition: all 0.2s;
  padding-bottom: 50px;
  box-sizing: border-box;
`;

export const sectionTitle = css`
  width: 990px;
  font-size: 24px;
  font-weight: bold;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 20px;
  ul {
    display: flex;
  }
  li {
    cursor: pointer;
    margin-right: 20px;
    color: #8f8d8d;
  }
  li:first-of-type {
    margin-left: 0px;
  }
`;

const cardList = css`
  width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 20px;
`;

const SearchSection = ({ title, children }) => {
  return (
    <div css={sectionContainer}>
      <div css={sectionTitle}>{title}</div>
      <div css={cardList}>{children}</div>
    </div>
  );
};

export default SearchSection;
