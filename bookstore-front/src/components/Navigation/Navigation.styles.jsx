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
background-color: white;
border-bottom : 1px solid #e1e1e1;
`;

export const navButton = css`
width: 80px;
height: 40px;
background-color: #79d7f3;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
font-weight: 600;
border-radius: 8px;
transition: all 0.2s;

&:hover {
        background-color: #0882F3;
    }
`;

export const darkModeButton = css`
width: 40px;
height: 40px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
border: solid 1px #e1e1e1;
margin-left: 10px;
`;

export const menuButton = css`
width: 40px;
height: 40px;
margin-left: 10px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
border: solid 1px #e1e1e1;
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