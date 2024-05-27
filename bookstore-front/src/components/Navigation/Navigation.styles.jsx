import { css } from "@emotion/react";

export const navContainer = css`
  width: 100vw;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 40px;
  box-sizing: border-box;
  z-index: 998;
  background-color: var(--mainBG);
  color: var(--fontColor);
  border-bottom: 1px solid var(--outLine);
  transition: all 0.2s;
`;

export const navButton = (marginRight, width = "80px") => css`
  width: ${width};
  height: 40px;
  background-color: #79d7f3;
  color : var(--reverseFontColor);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  margin-right: ${marginRight};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #0882f3;
  }
`;

export const darkModeButton = css`
  width: 40px;
  height: 40px;
  color: var(--reverseFontColor);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--reverseMainBG);
  border: 1px solid var(--outLine);
  margin-left: 10px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export const menuButton = css`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--outLine);
`;

export const leftContainer = css`
  flex: 0.5;
  display: flex;
  justify-content: left;
`;

export const rightContainer = css`
  flex: 0.5;
  justify-content: right;
  display: flex;
`;
