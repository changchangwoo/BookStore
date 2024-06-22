import { css } from "@emotion/react";

export const sectionContainer = css`
  cursor: pointer;
  width: 230px;
  height: 438px;
  transition: all 0.2s;
  background-color: var(--subBG);
  border: 1px solid var(--outLine);
  color: var(--fontColor);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    opacity: 0.5;
  }
`;

export const imgBox = css`
  width: 100%;
  height: 260px;
  border: 1px solid var(--outLine);
  box-sizing: border-box;
  border-radius: 8px;
  object-fit: cover;
`;

export const descriptionBox = css`
  width: 190px;
  height: 90%;
  color: var(--fontColor);
  h1 {
    font-size: 16px;
    margin: 0;
    margin-top: 20px;
    font-weight: bold;
    height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h2 {
    font-size: 14px;
    margin: 0;
    margin-top: 5px;
    font-weight: 500;
    color: #8f8d8d;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const simpleDescript = css`
  margin-top: 10px;
  width: 100%;
  height: 30px;
  font-size: 13px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const bookPrice = css`
  margin-top: 20px;
  font-size: 14px;
`;

export const highlightStyle = css`
  background-color: yellow;
`;