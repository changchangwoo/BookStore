import { css } from "@emotion/react";
import { current } from "@reduxjs/toolkit";

export const sectionContainer = (backgroundColor) => css`
  width: 100%;
  height: 567px;
  background-color: ${backgroundColor};
  margin: auto;
  overflow: hidden;
  border-bottom: 1px solid #e1e1e1;
`;

export const contentContainer = css`
  max-width: 1200px;
  margin: auto;
`;

export const sectionTitle = css`
  width: 990px;
  font-size: 24px;
  font-weight: bold;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 20px;
  ul{
    display: flex;
  }
  li {
    cursor: pointer;
    margin-right: 20px;
    color: #8F8D8D;
  }
  li:first-of-type {
    margin-left: 0px;
  }
`;

export const cardList = css`
  width: 1000px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: auto;
`;
export const contentController = css`
  width: 100%;
  height: 567px;
  position: absolute;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
export const leftControllerButton = css`
  width: 50px;
  height: 50px;
  margin-right: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-right: 20px;
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
`;