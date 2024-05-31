import ContentSection from "../components/Section/ContentSection/ContentSection";
import DetailImageCard from "../components/Card/DetailImageCard";
import DetailSection from "../components/Section/DetailSections";
import DetailCard from "../components/Card/DetailCard";
import DivisionSection from "../components/Section/DivisionSection";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailBook } from "../reduces/detailBookSlice";
import { getRecentCategoryBook } from "../reduces/recentBookSlice";
import ListCard from "../components/Card/ListCard";
import DescriptionCard from "../components/Card/DescriptionCard";
import ReviewSection from "../components/Section/ReviewSection/ReviewSection";
import ReviewContents from "../components/Contents/ReviewContents/ReviewContents";
import RecentContents from "../components/Contents/RecentContents";
import SearchEngine from "../components/Search/SearchContainer";


function Detail() {
  const { category_id, id } = useParams();
  const dispatch = useDispatch();
  const detailBook = useSelector((state) => state.detailBook.books);
  const rerender = useSelector((state) => state.detailBook.rendering)
  const [categoryName, setCategoryName] = useState(null)

  useEffect(() => {
    switch(category_id) {
      case '0' : setCategoryName('소설')
      break;
      case '1' : setCategoryName('인문')
      break;
      case '2' : setCategoryName('건강')
      break;
      case '3' : setCategoryName('IT')
      break;
      case '4' : setCategoryName('자기계발')
      break;
      case '5' : setCategoryName('에세이')
      break;
      case '6' : setCategoryName('시')
    }
    dispatch(getDetailBook(id));
    dispatch(getRecentCategoryBook(category_id));
  }, [rerender]);

  return (
    <>
      <SearchEngine />
      <DetailSection title={categoryName} backgroundColor="white">
        <DetailImageCard img={detailBook.img} />
        <DetailCard
          id={detailBook.id}
          title={detailBook.title}
          author={detailBook.author}
          detail={detailBook.detail}
          price={detailBook.price}
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
