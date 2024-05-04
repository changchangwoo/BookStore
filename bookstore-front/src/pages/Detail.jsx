import ContentSection from "../components/ContentSection/ContentSection";
import SearchEngine from "../components/SearchContainer/SearchContainer";
import DetailImageCard from "../components/Card/DetailImageCard";
import DetailSection from "../components/ContentSection/DetailSections";
import DetailCard from "../components/Card/DetailCard"

function Detail() {
  return (
    <>
          <SearchEngine />
          <DetailSection title="소설" backgroundColor="white">
            <DetailImageCard />
            <DetailCard />
          </DetailSection>

    </>
  );
}

export default Detail
