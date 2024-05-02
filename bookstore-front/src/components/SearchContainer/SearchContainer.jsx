import { css } from "@emotion/react";
import SearchBox from "./SearchBox";
function SearchEngine() {
  const searchEngineContainer = css`
    width: 100%;
    height: 160px;
    text-align: center;
    border-bottom: 1px solid #e1e1e1;
    h1 {
      font-size: 24px;
      font-weight: bold;
      position: relative;
      margin-top: 50px;
      margin-bottom: 20px;
    }
  `;

  return (
    <>
      <div css={searchEngineContainer}>
        <h1>도서 검색</h1>
        <SearchBox />
      </div>
    </>
  );
}

export default SearchEngine;
