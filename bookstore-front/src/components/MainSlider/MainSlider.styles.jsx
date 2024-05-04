import { css } from "@emotion/react";

export const mainSliderContainer = (currentSlide) => css`
  width: 500vw;
  height: 350px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  position: relative;
  background-color: ${currentSlide % 2 === 0 ? 'white' : '#3F3D55'};
  transform: translateX(-${currentSlide * 100}vw);
  transition: ${currentSlide===0 ? 'none' : 'all 1s ease'};
`;

export const imageContainer = css`
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const imageBox = css`
  width: 400px;
  height: 344px;
  background-size: cover;
`;

export const sliderDescript = (currentSlide) => css`
  color : ${currentSlide % 2 === 0 ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  text-align: center;
  h1 {
    font-size: 24px;
    margin: 0px;
    margin-top: 5px;
    font-weight: 850;
  }
  h2 {
    font-size: 20px;
    margin: 0px;
    font-weight: 400;
  }
`;

export const sliderControllerContainer = css`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60px;
  left: 0;
`;
export const iconSize = css`
  font-size: 40px;
  font-weight: bold;
  transition: 0.2s;
  margin: 30vw;
  &:hover {
    color: grey;
  }
`;