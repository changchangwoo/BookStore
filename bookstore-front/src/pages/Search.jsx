import SmallCard from "../components/Card/SmallCard";
import ContentSection from "../components/Section/ContentSection/ContentSection";
import SearchEngine from "../components/SearchContainer/SearchContainer";
import { useSelector } from "react-redux";
import SearchResultContents from "../components/Section/Contents/SearchResultContents";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Search() {
  const searchBooks = useSelector((state) => state.searchBook.books);
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
      <ContentSection
          title={`"${resultKeyword}" 에 대해 검색한 결과 (${searchBooks.length})`}
        slideLength={Math.ceil(searchBooks.length / 4)}>
        <SearchResultContents searchBooks={searchBooks} query={resultKeyword} />
      </ContentSection>

    </>
  );
}

export default Search;
