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

function ContentSection(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  
  const nextSlide = useCallback(() => {
    if (currentSlide === 2) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide === 0) return;
    setCurrentSlide((prev) => (prev - 1) % totalSlides);
  }, [currentSlide]);

    return (
      <>
        <div css={sectionContainer(props.backgroundColor)}>
          <div css={contentController}>
            <div css={leftControllerButton} onClick={prevSlide}>
              <span class="material-symbols-outlined">chevron_left</span>
            </div>
            <div css={rightControllerButton} onClick={nextSlide}>
              <span class="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
          <div css={contentContainer}>
            <div css={sectionTitle}>{props.title}</div>
            <div css={cardList}>
              <div css={cards(currentSlide)}>{props.children}</div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ContentSection;
