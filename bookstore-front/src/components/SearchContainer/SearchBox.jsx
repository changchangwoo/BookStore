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
  border: 1px solid #e1e1e1;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
  display: flex;
  box-sizing: border-box;
`;

const searchIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const inputSearchBox = css`
  width: 580px;
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
    if (location.pathname === "/search") {
      event.preventDefault()
      navigator(`/search?query=${searchRef.current.value}`);  
    } else {
      event.preventDefault()
      navigator(`/search?query=${searchRef.current.value}`);
    }
  };
  
  const onChangeInputSearch = debounce((e) => {
    if(location.pathname === "/search") {
      dispatch(getSearchBooks(searchRef.current.value))
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
