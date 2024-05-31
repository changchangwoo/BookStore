import MainSlider from "../components/MainSlider/MainSlider";
import ContentSection from "../components/Section/ContentSection/ContentSection";
import DivisionSection from "../components/Section/DivisionSection";
import CategorySection from "../components/Section/CategorySection/CategorySection";
import BestBookContents from "../components/Contents/BestBookContents"
import NewBookContents from "../components/Contents/NewBookContents"
import RecentContents from "../components/Contents/RecentContents"
import CategoryContents from "../components/Contents/CategoryContents";
import SearchEngine from "../components/Search/SearchContainer";
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
