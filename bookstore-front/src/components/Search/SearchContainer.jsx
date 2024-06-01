import { css } from "@emotion/react";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
import SearchCategory from "./SearchCategory";
function SearchEngine() {
  const searchEngineContainer = css`
    width: 100%;
    height: 200px;
    text-align: center;
    background-color: var(--mainBG);
    border-bottom: 1px solid var(--outLine);
    color: var(--fontColor);
    transition: all 0.2s;
    padding-top: 60px;
    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
      position: relative;
      margin-bottom: 20px;
    }
  `;

  return (
    <>
      <div css={searchEngineContainer}>
        <h1>도서 검색</h1>
        <SearchBox />
        <SearchCategory />
      </div>
    </>
  );
}

export default SearchEngine;
