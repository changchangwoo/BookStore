import ContentSection from "../components/Section/ContentSection/ContentSection";
import DetailImageCard from "../components/Card/DetailImageCard";
import DetailSection from "../components/Section/DetailSections";
import DetailCard from "../components/Card/DetailCard";
import DivisionSection from "../components/Section/DivisionSection";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailBook, rerender } from "../reduces/detailBookSlice";
import { getRecentCategoryBook } from "../reduces/recentBookSlice";
import ListCard from "../components/Card/ListCard";
import DescriptionCard from "../components/Card/DescriptionCard";
import ReviewSection from "../components/Section/ReviewSection/ReviewSection";
import ReviewContents from "../components/Contents/ReviewContents/ReviewContents";
import RecentContents from "../components/Contents/RecentContents";
import SearchEngine from "../components/Search/SearchContainer";
import ScrollToTop from "../utils/scrollToTop";


function Detail() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const detailBook = useSelector((state) => state.detailBook.books);
  const category = useSelector((state)=> state.category.category)
  const [categoryName, setCategoryName] = useState(null)

  useEffect(() => {
    const categoryId = parseInt(searchParams.get('category_id'));
    const bookId = parseInt(searchParams.get('book_id'));
    category.map((item)=>{
      if(item.category_id === categoryId) setCategoryName(item.category_name)
    })
    dispatch(getDetailBook(bookId));
    dispatch(getRecentCategoryBook(categoryId));
    window.scrollTo(0, 0);
  }, [searchParams]);
  

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
