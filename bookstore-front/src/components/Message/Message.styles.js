import { css } from "@emotion/react";

export const MessageContainer = css`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;
  box-sizing: border-box;
  padding-bottom: 50px;
  justify-content: center;
  z-index: 999;
  pointer-events: none;
`;

export const MessageBox = css`
  width: 600px;
  height: 60px;
  border-radius: 8px;
  text-align: center;
  justify-content: space-between; 
    align-items: center;
  background-color: #79d7f3;
  box-sizing: border-box;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  pointer-events: auto;
  display: flex;
`;

export const textBox = css`
  text-align: center;
  flex: 1; 
`;

export const exitBox = css`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  span {
    font-size: 25px;
    cursor: pointer;
  }
`;