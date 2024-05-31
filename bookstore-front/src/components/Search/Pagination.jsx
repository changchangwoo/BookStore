import { css } from "@emotion/react";
import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const sectionContainer = css`
  padding: 20px 0;
  max-width: 1000px;
  height: 50px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  ol {
    display: flex;
    gap: 10px;
  }
  button {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border: var(--outLine);
    color: var(--reverseFontColor);
    background-color: var(--primary);
    border-radius: 8px;
    &:hover {
      background-color: #0882f3;
      transition: all 0.2s;
    }
  }
`;
const Pagination = ({ totalCount }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pages = Math.ceil(totalCount / 8);
  const handleClickPage = (page) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", page);
    setSearchParams(newSearchParams);
  };
  return (
    <div css={sectionContainer}>
      {pages > 0 && (
        <ol>
          {Array(pages)
            .fill(0)
            .map((_, index) => (
              <li>
                <button onClick={handleClickPage(index+1)}>{index+1}</button>
              </li>
            ))}
        </ol>
      )}
    </div>
  );
};

export default Pagination;
