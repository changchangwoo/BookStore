import { css } from "@emotion/react";

export const orderContainer = css`
  width: 100%;
  height: 765px;
  background-color: var(--subBG);
  border: 1px solid var(--outLine);
  border-radius: 8px;
  padding: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  .hide-scrollbar::-webkit-scrollbar {
  width: 0;

  @media (max-width: 765px) {
    width: 600px;    
  }
}
`;

export const topBox = css`
  width: 100%;
  height: 40px;
  border: 1px solid var(--outLine);
  border-radius: 8px;
  background-color: var(--mainBG);
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
    li:nth-of-type(1) {
      margin-left: 20px;
      flex: 0.1;
    }
    li:nth-of-type(4) {
      flex: 0.3;
    }
  }
  
`;

export const orderItem = css`
  width: 100%;
  height: 80px;
  border: 1px solid var(--outLine);
  border-radius: 8px;
  background-color: var(--mainBG);
  margin-bottom: 10px;
  padding: 20px;
  box-sizing: border-box;

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
    li:nth-of-type(1) {
      flex: 0.1;
    }
    li:nth-of-type(4) {
      flex: 0.3;
    }
  }
`;
