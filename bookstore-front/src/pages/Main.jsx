import SearchEngine from "../components/SearchContainer/SearchContainer";
import MainSlider from "../components/MainSlider/MainSlider";
import ContentSection from "../components/Section/ContentSection/ContentSection";
import LargeCard from "../components/Card/LargeCard";
import DivisionSection from "../components/Section/DivisionSection";
import NewBookContents from "../components/Section/Contents/NewBookContents";
import CategorySection from "../components/Section/CategorySection/CategorySection";
import CategoryContents from "../components/Section/CategorySection/CategoryContents";
import BestBookContents from "../components/Section/Contents/BestBookContents";
import RecentContents from "../components/Section/Contents/RecentContents";
function Main() {
  return (
    <>
      <MainSlider />
      <SearchEngine />

      <ContentSection title="베스트 셀러" backgroundColor="white">
        <BestBookContents/>
      </ContentSection>

      <ContentSection title="신간 안내">
        <NewBookContents/>
      </ContentSection>

      <CategorySection backgroundColor="white">
        <CategoryContents/>
      </CategorySection>

      <DivisionSection titleLeft="내가 방금 본 책" titleRight="방금 본 책과 비슷한 책" backgroundColor="rgba(0,0,0,0)">
        <RecentContents hold={true} type="big"/>
        <RecentContents hold={false} type="big"/>
      </DivisionSection>
    </>
  );
}

export default Main;
