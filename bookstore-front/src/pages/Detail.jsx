import ContentSection from "../components/Section/ContentSection/ContentSection";
import SearchEngine from "../components/SearchContainer/SearchContainer";
import DetailImageCard from "../components/Card/DetailImageCard";
import DetailSection from "../components/Section/DetailSections";
import DetailCard from "../components/Card/DetailCard"
import SmallCard from "../components/Card/SmallCard"
import DivisionSection from "../components/Section/DivisionSection";
import LargeCard from "../components/Card/LargeCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetailBook } from "../reduces/detailBookSlice";
import { getRecentCategoryBook } from "../reduces/recentBookSlice";
import RecentContents from "../components/Section/Contents/RecentContents";

function Detail() {
  const { category_id, id } = useParams();
  const dispatch = useDispatch();
  const detailBook = useSelector((state) => state.detailBook.books)

  useEffect(()=>{
    dispatch(getDetailBook(id))
    dispatch(getRecentCategoryBook(category_id))
  }, [])
  
  return (
    <>
          <SearchEngine />
          <DetailSection title="소설" backgroundColor="white">
            <DetailImageCard 
            img={detailBook.img}
            />
            <DetailCard
            id={detailBook.id} 
            title={detailBook.title}
            author={detailBook.author}
            detail={detailBook.detail}
            price={detailBook.price}
            />
          </DetailSection>

          <ContentSection title={"지금 보시는 책과 비슷한 작품"}>
            <RecentContents type="small"/>
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
