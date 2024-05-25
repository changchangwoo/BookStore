import SmallCard from "../components/Card/SmallCard"
import ContentSection from "../components/Section/ContentSection/ContentSection"
import SearchEngine from "../components/SearchContainer/SearchContainer"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import LargeCard from "../components/Card/LargeCard"

function Search() {
    const searchBooks = useSelector(state => state.searchBook.books)
    console.log(searchBooks)

    return (
      <>
      <SearchEngine/>
      <ContentSection title="검색 결과">
        <LargeCard/>
        <LargeCard/>
      </ContentSection>
      <ContentSection title="장르별 / 소설">
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      </ContentSection>
      </>
    )
  }
  
  export default Search
  