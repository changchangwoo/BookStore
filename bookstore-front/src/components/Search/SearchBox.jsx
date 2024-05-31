import { css } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../../utils/api";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { getSearchBooks } from "../../reduces/searchBookSlice";
import { useRef, useState } from "react";
import { debounce } from "lodash";

const inputBox = css`
  width: 650px;
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
  const dispatch = useDispatch();
  const location = useLocation();
  const searchRef = useRef(null);

  const handleSearch = (event) => {
    const query = searchRef.current.value 
    if (location.pathname === "/search") {
      event.preventDefault()
      navigator(`/search?query=${query}`);  
    } else {
      event.preventDefault()
      dispatch(getSearchBooks({inputSearch : query, currentPage : 1, totalCount : true}))
      navigator(`/search?query=${query}`);
    }
  };
  
  const onChangeInputSearch = debounce((e) => {
    if(location.pathname === "/search") {
      dispatch(getSearchBooks({inputSearch : searchRef.current.value, currentPage : 1, totalCount : true}))
    };
  }, 300);


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
            ref={searchRef}
            onChange={onChangeInputSearch}
            placeholder="검색할 책 이름을 입력해주세요"
          />
        </div>
        <button type="submit" css={submitButton} onClick={handleSearch} />
      </form>
    </>
  );
}

export default SearchBox;