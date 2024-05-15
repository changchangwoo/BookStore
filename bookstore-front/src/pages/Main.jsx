import SearchEngine from "../components/SearchContainer/SearchContainer";
import MainSlider from "../components/MainSlider/MainSlider";
import ContentSection from "../components/Section/ContentSection/ContentSection";
import LargeCard from "../components/Card/LargeCard";
import SmallCard from "../components/Card/SmallCard";
import DivisionSection from "../components/Section/DivisionSection";
import NewBookContents from "../components/Section/NewBookContents";
import CategorySection from "../components/Section/CategorySection/CategorySection";
import CategoryContents from "../components/Section/CategorySection/CategoryContents";
function Main() {
  return (
    <>
      <MainSlider />

      <SearchEngine />

      <ContentSection title="베스트 셀러" backgroundColor="white">
        <LargeCard />
        <LargeCard />
      </ContentSection>

      <ContentSection title="신간 안내" backgroundColor="rgba(0,0,0,0)">
        <NewBookContents/>
      </ContentSection>

      <CategorySection backgroundColor="white">
        <CategoryContents/>
      </CategorySection>

      <DivisionSection titleLeft="내가 방금 본 책" titleRight="방금 본 책과 비슷한 책" backgroundColor="rgba(0,0,0,0)">
        <LargeCard />
        <LargeCard />
      </DivisionSection>
    </>
  );
}

export default Main;
