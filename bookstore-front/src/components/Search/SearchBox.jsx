import { css } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchBooks } from "../../reduces/searchBookSlice";
import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

const inputBox = css`
  max-width  : 650px;
  height: 60px;
  border-radius: 8px;
  border: 1px solid var(--outLine);
  background-color: var(--subBG);
  color: var(--fontColor);
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
  display: flex;
  box-sizing: border-box;
  transition: all 0.2s;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const searchIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const inputSearchBox = css`
  width: 580px;
  color: var(--fontColor);
  font-size: 20px;
  font-weight: 500;
  border: none;
  margin-left: 20px;
  background-color: rgba(0, 0, 0, 0);
`;

const submitButton = css`
  display: none;
`;

function SearchBox() {
  const navigator = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const handleSearch = (event) => {
    console.log(searchQuery)
    event.preventDefault();
    dispatch(
      getSearchBooks({
        inputSearch: searchQuery,
        currentPage: 1,
        totalCount: true,
      })
    );
    navigator(`/search?query=${searchQuery}`);
  };

  return (
    <>
      <form css={inputBox}>
        <div css={searchIcon}>
          <span className="material-symbols-outlined" style={{ fontSize: 30 }}>
            search
          </span>
          <input
            autoFocus
            css={inputSearchBox}
            onChange={(e) => setSearchQuery(e.target.value)}
            ref={searchRef}
            placeholder="검색할 책 이름을 입력해주세요"
          />
        </div>
        <button type="submit" css={submitButton} onClick={handleSearch} />
      </form>
    </>
  );
}

export default SearchBox;
