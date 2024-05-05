import SearchEngine from "../components/SearchContainer/SearchContainer";
import MainSlider from "../components/MainSlider/MainSlider";
import ContentSection from "../components/Section/ContentSection";
import LargeCard from "../components/Card/LargeCard";
import SmallCard from "../components/Card/SmallCard";
import DivisionSection from "../components/Section/DivisionSection";

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
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </ContentSection>
      <ContentSection title="장르별" backgroundColor="white">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </ContentSection>
      <DivisionSection titleLeft="내가 방금 본 책" titleRight="방금 본 책과 비슷한 책" 
      backgroundColor="rgba(0,0,0,0)">
        <LargeCard />
        <LargeCard />
      </DivisionSection>
    </>
  );
}

export default Main;
