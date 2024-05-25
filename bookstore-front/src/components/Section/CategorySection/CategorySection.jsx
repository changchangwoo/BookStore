import React, { useCallback, useEffect, useState } from "react";

import {
  sectionContainer,
  contentController,
  leftControllerButton,
  rightControllerButton,
  contentContainer,
  sectionTitle,
  cardList,
  cards,
} from "../ContentSection/ContentSection.styles";
import { useDispatch } from "react-redux";
import { getCategoryBook } from "../../../reduces/categoryBookSlice";

const CategorySection = (props) => {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categorys = ["소설", "인문", "건강", "IT", "자기계발", "에세이", "시"];
  const totalSlides = 2;

  useEffect(()=>{
    dispatch(
      getCategoryBook(0)
    )
  }, [])
  
  const nextSlide = useCallback(() => {
    if (currentSlide === 1) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide === 0) return;
    setCurrentSlide((prev) => (prev - 1) % totalSlides);
  }, [currentSlide]);

  const handleCategory = useCallback((index) => {
    setSelectedCategory(index)
    dispatch(
      getCategoryBook(index)
    )
  }, []);

  return (
    <div css={sectionContainer(props.backgroundColor)}>
      <div css={contentController}>
        <div css={leftControllerButton} onClick={prevSlide}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>
        <div css={rightControllerButton} onClick={nextSlide}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
      </div>
      <div css={contentContainer}>
        <div css={sectionTitle}>
          <ul>
            {categorys.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategory(index)}
                style={{
                  color: index === selectedCategory ? "black" : "#8F8D8D",
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div css={cardList}>
          <div css={cards(currentSlide)}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
