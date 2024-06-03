import SmallCard from "../components/Card/SmallCard";
import ContentSection from "../components/Section/ContentSection/ContentSection";
import SearchEngine from "../components/Search/SearchContainer";
import { useDispatch, useSelector } from "react-redux";
import SearchResultContents from "../components/Contents/SearchResultContents";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchSection from "../components/Section/SearchSection";
import Pagination from "../components/Search/Pagination";
import { getSearchCategory } from "../reduces/searchBookSlice";

function Search() {
  const searchBooks = useSelector((state) => state.searchBook.books);
  const totalCount = useSelector((state) => state.searchBook.totalCount);
  const category = useSelector((state)=> state.category.category)
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();

  const [resultKeyword, setResultKeyword] = useState("");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    const categoryId = parseInt(searchParams.get("categoryId"));
    const page = searchParams.get("page");

    if (query) {
      setResultKeyword(query);      
    }

    if (categoryId !== null && !isNaN(categoryId)) {
      const categoryName = category.find(item => item.category_id === categoryId)?.category_name;
      setResultKeyword(null);
      setCategoryName(categoryName);
      if (!page) {
        dispatch(
          getSearchCategory({
            categoryId: categoryId,
            currentPage: 1,
            totalCount: true,
          })
        );
      }
    }
  }, [location.search]);

  return (
    <>
      <SearchEngine />
      <SearchSection title={
        resultKeyword ? `"${resultKeyword}" 에 대해 검색한 결과 (${totalCount})`
        : `${categoryName} (${totalCount})`
      }>
        <SearchResultContents searchBooks={searchBooks} query={resultKeyword} />
      </SearchSection>
      <Pagination totalCount={totalCount} />
    </>
  );
}

export default Search;
