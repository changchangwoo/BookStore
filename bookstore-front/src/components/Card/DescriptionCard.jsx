import { css } from "@emotion/react";
import React from "react";

const sectionContainer = css`
  width: 480px;
  height: 438px;
  background-color: white;
  border: 1px solid #e1e1e1;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const DescriptionCard = ({ detail }) => {
  return <div css={sectionContainer}>{detail}</div>;
};

export default DescriptionCard;
