import { useCallback, useEffect, useState } from "react";
import {
  sectionContainer,
  contentController,
  leftControllerButton,
  rightControllerButton,
  contentContainer,
  sectionTitle,
  cardList,
  cards,
} from "./ContentSection.styles";
import { useSelector } from "react-redux";

function ContentSection({backgroundColor, title, children, slideLength}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(10)
  const isDark = useSelector(state => state.user.isDark)

  useEffect(()=>{
    if(slideLength) setTotalSlides(slideLength)
  }, [totalSlides])
  
  const nextSlide = useCallback(() => {
    if (currentSlide === totalSlides-1) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide === 0) return;
    setCurrentSlide((prev) => (prev - 1) % totalSlides);
  }, [currentSlide]);

    return (
      <>
        <div css={sectionContainer}>
          <div css={contentController}>
            <div css={leftControllerButton} onClick={prevSlide}>
              <span className="material-symbols-outlined">chevron_left</span>
            </div>
            <div css={rightControllerButton} onClick={nextSlide}>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
          <div css={contentContainer}>
            <div css={sectionTitle}>{title}</div>
            <div css={cardList}>
              <div css={cards(currentSlide)}>{children}</div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ContentSection;
