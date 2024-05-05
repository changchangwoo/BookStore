import SmallCard from "../components/Card/SmallCard"
import ContentSection from "../components/Section/ContentSection"
import SearchEngine from "../components/SearchContainer/SearchContainer"

function Search() {

    return (
      <>
      <SearchEngine/>
      <ContentSection title="장르별 / 소설">
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      </ContentSection>
      <ContentSection>
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      </ContentSection>
      </>
    )
  }
  
  export default Search
  