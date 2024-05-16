import { css } from "@emotion/react";

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

const inputSearch = css`
  width: 580px;
  font-size: 20px;
  font-weight: 500;
  border: none;
  margin-left: 20px;
  background-color: rgba(0, 0, 0, 0);
`;

function SearchBox() {
  return (
    <>
      <form css={inputBox} >
        <div css={searchIcon}>
          <span class="material-symbols-outlined" style={{ fontSize: 30 }}>
            search
          </span>
          <input 
          autoFocus
          css={inputSearch} placeholder="거미 여인의 키스"/>
        </div>
      </form>
    </>
  );
}

export default SearchBox;
