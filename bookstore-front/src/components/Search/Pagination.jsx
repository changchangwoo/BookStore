import { css } from "@emotion/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getSearchBooks, getSearchCategory } from "../../reduces/searchBookSlice";

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
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }
`;
const Pagination = ({ totalCount }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const pages = Math.ceil(totalCount / 8);
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const currentPageGroup = Math.ceil(currentPage / 5);

  const pageButtonRender = () => {
    const startPage = (currentPageGroup - 1) * 5 + 1;
    const endPage = Math.min(5 * currentPageGroup, pages);
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i}>
          <button 
          style={{backgroundColor : currentPage === i ? "var(--primaryHover)" : "var(--primary" }}
          onClick={() => handleClickPage(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  const handleClickPage = (page) => {
    const newSearchParams = new URLSearchParams(searchParams);
    const categoryId = parseInt(newSearchParams.get("categoryId"))
    const queryString = newSearchParams.get("query")
    newSearchParams.set("page", page);
    setSearchParams(newSearchParams);
    if (queryString) {
      console.log('쿼리스트링 추가')
      dispatch(
        getSearchBooks({
          inputSearch: queryString,
          currentPage: page,
          totalCount: false,
        })
      );
      return
    }
    if(categoryId !== null && categoryId !== undefined && categoryId !== NaN) {
      console.log('category 추가', queryString, categoryId)
      dispatch(
        getSearchCategory({
          categoryId: parseInt(categoryId),
          currentPage: page,
          totalCount : true
        })
      );
    }


  };

  const prevPage = () => {
    if(currentPage > 1) {
      handleClickPage(currentPage-1)
    }
  }

  const nextPage = () => {
    if(currentPage < pages) {
      handleClickPage(currentPage+1)
    }
  }

  return (
    <div css={sectionContainer}>
      {pages > 0 && (
        <ol>
          <button onClick={prevPage}>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {pageButtonRender()}
          <button onClick={nextPage}>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </ol>
      )}
    </div>
  );
};

export default Pagination;
