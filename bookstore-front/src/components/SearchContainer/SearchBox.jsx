import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { getSearchBooks } from "../../reduces/searchBookSlice";

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
  // 만약에 다른 페이지인 경우에는, 검색하면 해당 페이지로 넘어가면서 데이터 출력
  // 동일한 페이지의 경우 실시간 디바운싱을 통해서 데이터 통신
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [inputSearch, onChangeInputSearch] = useInput("");
  const handleSearch = () => {
    dispatch(getSearchBooks(inputSearch));
    navigator(`/search?query=${inputSearch}`);
  };
  return (
    <>
      <form css={inputBox}>
        <div css={searchIcon}>
          <span class="material-symbols-outlined" style={{ fontSize: 30 }}>
            search
          </span>
          <input
            autoFocus
            css={inputSearchBox}
            onChange={onChangeInputSearch}
            placeholder="거미 여인의 키스"
          />
        </div>
        <button type="submit" css={submitButton} onClick={handleSearch} />
      </form>
    </>
  );
}

export default SearchBox;
