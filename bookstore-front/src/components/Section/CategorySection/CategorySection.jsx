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
import { useDispatch, useSelector } from "react-redux";
import { getCategoryBook } from "../../../reduces/categoryBookSlice";
import API from "../../../utils/api";
import { getCategory } from "../../../reduces/categorySlice";

const CategorySection = (props) => {
  const isDark = useSelector((state) => state.user.isDark);
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getCategoryBook(0));
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide === 1) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide === 0) return;
    setCurrentSlide((prev) => (prev - 1) % totalSlides);
  }, [currentSlide]);

  const handleCategory = useCallback((index) => {
    setSelectedCategory(index);
    dispatch(getCategoryBook(index));
  }, []);

  return (
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
        <div css={sectionTitle}>
          <ul>
            {category.map((item, index) => (
              <li
                key={item.category_id}
                onClick={() => handleCategory(index)}
                style={{
                  color:
                    index === selectedCategory
                      ? isDark
                        ? "white"
                        : "black"
                      : "#8F8D8D",
                }}
              >
                {item.category_name}
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
