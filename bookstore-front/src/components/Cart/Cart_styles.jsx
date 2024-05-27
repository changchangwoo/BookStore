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
  border: 1px solid var(--outLine);
  background-color: var(--subBG);
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;
  overflow-y: scroll;
  transition: all 0.2s;
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
  height: 470px;
  background-color: var(--subBG);
  border-radius: 8px;
  color: var(--fontColor);
  border: 1px solid var(--outLine);
  margin-left: 20px;
  padding: 20px;
  box-sizing: border-box;
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
  background-color: var(--mainBG);
  border: 1px solid var(--outLine);
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
  border: 1px solid var(--outLine);
  border-radius: 8px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const titleBox = css`
  flex: 1;
`;

export const cartTitle = css`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
`;

export const sub_title = css`
  margin: 0;
  margin-top: 5px;
  font-weight: 400;
  font-size: 14px;
  color: grey;
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
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`;

export const cartPrice = css`
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: right;
`;


export const selectedBox = css`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #e1e1e1;
`
export const confirmBox = css`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
padding: 20px;
box-sizing: border-box;
  
`

export const itemPrice = (color) => css`
  color : var(--fontColor);
  font-size: 16px;
  margin-bottom: 10px;
`

export const finalPrice = css`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
`