import { css } from "@emotion/react";

export const sectionContainer = css`
  width: 611px;
  height: 526px;
  background-color: var(--subBG);
  border: 1px solid var(--outLine);
  color : var(--fontColor);
  padding: 50px 0px 50px 0px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 26px;
    margin: 0;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 20px;
    margin-top: 10px;
    font-weight: 600;
    color: #8f8d8d;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    width: 400px;
    height: 103px;
    font-size: 13px;
    font-weight: 300;
    margin-top: 45px;
    margin-bottom: 45px;
    overflow-x: auto;
    ::-webkit-scrollbar {
  width: 0;
  }
    
  }

  @media (max-width: 768px) {
    width: 500px;
    margin-bottom: 40px;
    flex-direction: column;
  }
`;

export const quantitiyBox = css`
  width: 100%;
  height: 90px;   
  background-color: var(--mainBG);;
  border: 1px solid var(--outLine);
  border-left: none;
  border-right: none;
  display: flex;
  padding: 20px 20px 20px 50px;
  box-sizing: border-box;
`;
export const buttonContainer = css`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 20px;
`;
export const quantitiyController = css`
  flex: 0.5;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;
export const calculPrice = css`
  flex: 0.5;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: right;
`;
export const calculButton = css`
  margin: 20px;
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`;
