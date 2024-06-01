import SmallCard from "../components/Card/SmallCard";
import ContentSection from "../components/Section/ContentSection/ContentSection";
import SearchEngine from "../components/Search/SearchContainer";
import { useSelector } from "react-redux";
import SearchResultContents from "../components/Contents/SearchResultContents";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchSection from "../components/Section/SearchSection";
import Pagination from "../components/Search/Pagination";

function Search() {
  const searchBooks = useSelector((state) => state.searchBook.books);
  const totalCount = useSelector((state) => state.searchBook.totalCount);

  const [resultKeyword, setResultKeyword] = useState("");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    setResultKeyword(query);
  }, [location.search]);

  return (
    <>
      <SearchEngine />
      <SearchSection
          title={`"${resultKeyword}" 에 대해 검색한 결과 (${totalCount})`}>
        <SearchResultContents searchBooks={searchBooks} query={resultKeyword} />
      </SearchSection>
      <Pagination query={resultKeyword} totalCount={totalCount}/>


    </>
  );
}

export default Search;
