import { css } from "@emotion/react";

export const sectionContainer = css`
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  height: 600px;
  background-color: white;
`;

export const topBox = css`
  width: 100%;
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  li {
    flex: 1;
    border-right: 1px solid #e1e1e1;
    text-align: center;

    h3 {
      font-size: 16px;
      font-weight: bold;
      margin: 0;
    }

    h4 {
      font-size: 14px;
      font-weight: 400;
      color: grey;
      margin-top: 5px;
    }
  }
  li:last-child {
    border: none;
  }
  border-bottom: 1px solid #e1e1e1;
`;
export const reviewList = css`
width: 100%;
height: 80%;
margin-top: 0px;
margin-bottom: 10px;
overflow-y: auto;
`;

export const reviewBox = css`
width: 100%;
height: 80px;
display: flex;
padding: 10px;
box-sizing: border-box;
border-bottom : 1px solid #e1e1e1;
align-items: center;
justify-content: center;
cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const imgBox = css`
flex: 0.1;
margin-right: 30px;
display: flex;
justify-content: center;
align-items: center;

`;
export const ContentBox = css`
flex : 0.9;
padding: 5px;
box-sizing: border-box;
`;
export const reviewTitle = css`
font-size: 14px;
font-weight: bold;
margin-bottom: 5px;
flex: 1;
`;

export const reviewDate = css`
font-size: 13px;
`
export const titleBox = css`
display: flex;

`

export const reivewDescriptiton = css`
font-size: 16px;
`;



export const userImg = (rgb) => css`
width: 50px;
height: 50px;
border-radius: 50px;
background-color: ${rgb};
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 24px;
`

export const commentBox = css`
width: 100%;
height: 60px;
display: flex;
`

export const commentInput = css`
width: 80%;
margin-right: 30px;
border: 1px solid #e1e1e1;
border-radius: 8px;
font-size: 15px;
padding-left: 20px;
`
