import sliderImage1 from "../../assets/imgs/mainSlider_1.png";
import sliderImage2 from "../../assets/imgs/mainSlider_2.png";
import sliderImage3 from "../../assets/imgs/mainSlider_3.png";
import sliderImage4 from "../../assets/imgs/mainSlider_4.png";

import {
  mainSliderContainer,
  imageContainer,
  imageBox,
  sliderDescript,
  sliderControllerContainer,
  iconSize,
} from "./MainSlider.styles";
import { useCallback, useEffect, useState } from "react";

function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // 슬라이드의 총 개수

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides); 
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, []);

  return (
    <>
      <div
        css={mainSliderContainer(currentSlide)}
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        <div css={imageContainer}>
          <img src={sliderImage1} css={imageBox} />
          <div css={sliderDescript(currentSlide)}>
            <h2>잠이 안 오는 늦은 새벽에는</h2>
            <h1>감성 에세이 한 편 어떠세요?</h1>
          </div>
        </div>
        <div css={imageContainer}>
          <div css={sliderDescript(currentSlide)}>
            <h2>어느 순간 까마득히 잊어버렸던</h2>
            <h1>우주 여행을 떠나요</h1>
          </div>
          <img src={sliderImage2} css={imageBox} />
        </div>
        <div css={imageContainer}>
          <img src={sliderImage3} css={imageBox} />
          <div css={sliderDescript(currentSlide)}>
            <h2>일상에서 일상을 벗어나는</h2>
            <h1>새로운 경험의 창구</h1>
          </div>
        </div>
        <div css={imageContainer}>
          <div css={sliderDescript(currentSlide)}>
            <h2>오늘의 새로운 친구들은</h2>
            <h1>어떤 이야기들을 준비했을까요?</h1>
          </div>
          <img src={sliderImage4} css={imageBox} />
        </div>
      </div>
      <div css={sliderControllerContainer}>
        <span class="material-symbols-outlined">
          <span css={iconSize} onClick={prevSlide}>
            arrow_back_ios
          </span>
        </span>
        <span class="material-symbols-outlined">
          <span css={iconSize} onClick={nextSlide}>
            arrow_forward_ios
          </span>
        </span>
      </div>
    </>
  );
}

export default MainSlider;
