import { css } from "@emotion/react";
import React from "react";
import parse from 'html-react-parser'

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
  font-size: 14px;
  flex-direction: column;
  overflow: auto;
`;

const DescriptionCard = ({ detail }) => {
  return <div css={sectionContainer}>{typeof detail === 'string' ? parse(detail) : detail}</div>;
};

export default DescriptionCard;
