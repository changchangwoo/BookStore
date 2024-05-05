import { css } from "@emotion/react";

export const cartDisplay = css`
  display: flex;
`;

export const cartContainer = css`
  width: 650px;
  height: 765px;
  overflow: hidden;
  display: flex;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;
  overflow-y: scroll;
  input {
    width: 15px;
    height: 15px;
  }
`;

export const topBox = css`
  width: 100%;
  display: flex;
  height: 60px;
  align-items: center;
  margin-bottom: 20px;
`;
export const cartCheck = css`
  width: 315px;
  height: 460px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  margin-left: 20px;
`;

export const allCheck = css`
  display: flex;
  align-items: center;
  flex: 1;

  h3 {
    margin: 0;
    font-size: 16px;
    margin-left: 10px;
    font-weight: 400;
  }
`;
export const cartList = css`
  height: 100%;
`;
export const cartItem = css`
  width: 100%;
  height: 190px;
  background-color: #f9f9f9;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const cartImg = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 100%;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const titleBox = css`
  flex: 1;
  h1 {
    margin: 0;
    font-weight: bold;
    font-size: 20px;
  }
  h2 {
    margin: 0;
    margin-top: 5px;
    font-weight: 400;
    font-size: 16px;
    color: grey;
  }
`;

export const qunaitityBox = css`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const calculButton = css`
  margin: 10px;
  &:hover {
    scale: 1.2;
  }
`;

export const price = css`
  flex: 1;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: right;
`;
