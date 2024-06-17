import { css } from "@emotion/react";

export const deliveryDisplay = css`
  display: flex;
`;

export const deliveryContainer = css`
  width: 650px;
  height: 765px;
  overflow: hidden;
  display: flex;
  border-radius: 8px;
  border: 1px solid var(--outLine);
  background-color: var(--subBG);
  color: var(--fontColor);
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 765px) {
    width: 500px;
    margin-bottom: 20px;
    
  }
`;
export const deliveryInfo = css`
  width: 100%;
  height: 185px;
  font-size: 16px;
  background-color: var(--mainBG);
  border-radius: 8px;
  border: 1px solid var(--outLine);
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    border: none;
    background-color: var(--mainBG);
    border-bottom: 1px solid var(--outLine);
    height: 35px;
    color: var(--fontColor);

  }
`;

export const itemList = css`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 50px;
  max-height: 500px;
  border-radius: 8px;
  overflow-y: auto;
  ::-webkit-scrollbar {
  width: 0;
}
`;
