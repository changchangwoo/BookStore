import { css } from "@emotion/react";
import { current } from "@reduxjs/toolkit";

export const sectionContainer = css`
  width: 100%;
  height: 587px;
  background-color: var(--mainBG);
  color : var(--fontColor);
  margin: auto;
  overflow: hidden;
  border-bottom: 1px solid var(--outLine);
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const contentContainer = css`
  width: 1000px;
  margin: auto;
`;

export const sectionTitle = css`
  width: 1000px;
  font-size: 24px;
  font-weight: bold;
  margin: auto;
  margin-bottom: 20px;
  padding-left: 10px;
  ul{
    display: flex;
  }
  li {
    cursor: pointer;
    margin-right: 10px;
    color: #8F8D8D;
  }

  @media (max-width: 768px) {
    width: 500px;

    li {
      margin-right: 10px;
    }
  }
`;


export const cardList = css`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: auto;

  @media (max-width: 768px) {
    width: 500px;
    
  }
`;
export const contentController = css`
  width: 1200px;
  height: 567px;
  position: absolute;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  @media (max-width: 768px) {
    width: 600px;
    
  }
`;
export const leftControllerButton = css`
  width: 50px;
  height: 50px;
  display: flex;
  pointer-events: all;

  cursor: pointer;
  span {
    font-size: 50px;
    transition: all 0.2s;

  }
  &:hover {
    span {
      color : grey;
      scale: 1.5;
    }
  }
`;
export const rightControllerButton = css`
  width: 50px;
  height: 50px;
  pointer-events: all;

  cursor: pointer;
  span {
    font-size: 50px;
    transition: all 0.2s;
  }
  &:hover {
    span {
      color : grey;
      scale: 1.5;

    }
  }
`;

export const cards = (currentSlide) => css`
  width: 100%;
  height: 100%;
  display: flex;
  transform: translateX(-${currentSlide * 1000}px);
  transition: all 0.7s ease-in-out;

  @media (max-width: 760px) {
    transform: translateX(-${currentSlide * 500}px);

  }
`;