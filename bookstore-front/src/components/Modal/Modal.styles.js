import { css } from "@emotion/react";

export const ModalContainer = css`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 999;
`;

export const ModalBox = css`
  width: 355px;
  height: 355px;
  background-color: var(--mainBG);
  color: var(--fontColor);
  border: 1px solid var(--outLine);
  border-radius: 8px;
  display: flex;
  padding: 35px 20px 35px 20px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
  }
`;

export const inputID = css`
  width: 215px;
  height: 30px;
  margin-top: 10px;
  font-size: 14px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
`;

export const loginCheck = css`
  margin-top: 20px;
  font-size: 13px;
  margin-bottom: 30px;
  color: red;
`;

export const registerCheck = (color) => css`
  margin-top: 5px;
  font-size: 13px;
  color: ${color};
`;

export const passwordCheck = (color) => css`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 13px;
  color: ${color};
`;
export const register = css`
  font-size: 13px;
  color: #8f8d8d;
  margin-top: 10px;
  cursor: pointer;
`;
