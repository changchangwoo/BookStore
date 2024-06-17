import SearchEngine from "../components/Search/SearchContainer";
import SearchResultContents from "../components/Contents/SearchResultContents";
import SearchSection from "../components/Section/SearchSection";
import Pagination from "../components/Search/Pagination";
import useGetSearch from "../hooks/useGetSearch";

function Search() {
  const [resultKeyword, searchBooks, totalCount, categoryName] = useGetSearch();

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
