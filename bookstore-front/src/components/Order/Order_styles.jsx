import { css } from "@emotion/react";

export const orderContainer = css`
  width: 100%;
  height: 750px;
  background-color: white;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 40px;
  box-sizing: border-box;
`;

export const topBox = css`
  width: 100%;
  height: 40px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 40px;
  ul {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    height: 100%;
    li {
      flex: 0.175;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    li:nth-of-type(4) {
      flex: 0.3;
    }
  }
`;

export const orderItem = css`
  width: 100%;
  height: 80px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 10px;

  ul {
    display: flex;
    font-size: 14px;
    height: 100%;
    text-align: center;
    li {
      flex: 0.175;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    li:nth-of-type(4) {
      flex: 0.3;
    }
  }
`;
