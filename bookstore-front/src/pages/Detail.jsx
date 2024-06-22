import ContentSection from "../components/Section/ContentSection/ContentSection";
import DetailImageCard from "../components/Card/DetailImageCard";
import DetailSection from "../components/Section/DetailSections";
import DetailCard from "../components/Card/DetailCard";
import DivisionSection from "../components/Section/DivisionSection";
import ListCard from "../components/Card/ListCard";
import DescriptionCard from "../components/Card/DescriptionCard";
import ReviewSection from "../components/Section/ReviewSection/ReviewSection";
import ReviewContents from "../components/Contents/ReviewContents/ReviewContents";
import RecentContents from "../components/Contents/RecentContents";
import SearchEngine from "../components/Search/SearchContainer";
import useGetDetail from "../hooks/useGetDetail";


function Detail() {
  const [detailBook, categoryName, loginCheck] = useGetDetail();
  return (
    <>
      <SearchEngine />
      <DetailSection title={categoryName} backgroundColor="white">
        <DetailImageCard img={detailBook.img} />
        <DetailCard
          book={detailBook}
          loginCheck={loginCheck}
        />
      </DetailSection>

      <ContentSection title={"지금 보시는 책과 비슷한 작품"}>
        <RecentContents type="small" />
      </ContentSection>

      <DivisionSection
        titleLeft="목차"
        titleRight="상세 소개"
        backgroundColor="white"
      >
        <ListCard 
        contents={detailBook.contents}/>
        <DescriptionCard 
        detail={detailBook.detail}/>
      </DivisionSection>

      <ReviewSection title="리뷰">
        <ReviewContents
          id={detailBook.id}
        />
      </ReviewSection>
    </>
  );
}

export default Detail;
