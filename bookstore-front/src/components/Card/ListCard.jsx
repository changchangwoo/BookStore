import { css } from '@emotion/react';
import React from 'react'
import parse from 'html-react-parser'

const sectionContainer = css`
  width: 480px;
  height: 438px;
  background-color: var(--subBG);
  border: 1px solid var(--outLine);
  color:var(--fontColor);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
  width: 0;
  }
`;

const ListCard = ({contents}) => {
  return (
    <div css={sectionContainer}>{(typeof contents === 'string') ? parse(contents) : contents}</div>
  )
}

export default ListCard