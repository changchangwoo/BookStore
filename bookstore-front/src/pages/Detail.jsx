import ContentSection from "../components/Section/ContentSection/ContentSection";
import SearchEngine from "../components/SearchContainer/SearchContainer";
import DetailImageCard from "../components/Card/DetailImageCard";
import DetailSection from "../components/Section/DetailSections";
import DetailCard from "../components/Card/DetailCard"
import SmallCard from "../components/Card/SmallCard"
import DivisionSection from "../components/Section/DivisionSection";
import LargeCard from "../components/Card/LargeCard";

function Detail() {
  return (
    <>
          <SearchEngine />
          <DetailSection title="소설" backgroundColor="white">
            <DetailImageCard />
            <DetailCard />
          </DetailSection>
          <ContentSection title="위대한 개츠비와 비슷한 작품들">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </ContentSection>
          <DivisionSection titleLeft="목차" titleRight="상세 소개" 
          backgroundColor="white" >
          <LargeCard />
          <LargeCard />
          </DivisionSection>
          <DivisionSection titleLeft="정보" titleRight="리뷰">
          <LargeCard />
          <LargeCard />
          </DivisionSection>

    </>
  );
}

export default Detail
