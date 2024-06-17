import sliderImage1 from "../../assets/imgs/mainSlider_1.png";
import sliderImage2 from "../../assets/imgs/mainSlider_2.png";
import sliderImage3 from "../../assets/imgs/mainSlider_3.png";
import sliderImage4 from "../../assets/imgs/mainSlider_4.png";

import {
  mainSliderContainer,
  imageContainer,
  imageBox,
  sliderDescript,
} from "./MainSlider.styles.js";
import { useCallback, useEffect, useState } from "react";

const sliderData = [
  {
    img: sliderImage1,
    subTitle: "잠이 안 오는 늦은 새벽에는",
    pointTitle: "감성 에세이 한 편 어떠세요?",
  },
  {
    img: sliderImage2,
    subTitle: "어느 순간 까마득히 잊어버렸던",
    pointTitle: "우주 여행을 떠나요",
  },
  {
    img: sliderImage3,
    subTitle: "일상에서 일상을 벗어나는",
    pointTitle: "새로운 경험의 창구",
  },
  {
    img: sliderImage4,
    subTitle: "오늘의 새로운 친구들은",
    pointTitle: "어떤 이야기들을 준비했을까요?",
  },
  {
    img: sliderImage1,
    subTitle: "잠이 안 오는 늦은 새벽에는",
    pointTitle: "감성 에세이 한 편 어떠세요?",
  },
];

function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = sliderData.length;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (currentSlide === totalSlides - 1) {
        setCurrentSlide(0);
      } else {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [currentSlide]);

  return (
    <div css={mainSliderContainer(currentSlide)}>
      {sliderData.map((slide, index) => (
        <div key={index} css={imageContainer}>
          <img src={slide.img} css={imageBox} />
          <div css={sliderDescript(currentSlide)}>
            <h2>{slide.subTitle}</h2>
            <h1>{slide.pointTitle}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainSlider;
