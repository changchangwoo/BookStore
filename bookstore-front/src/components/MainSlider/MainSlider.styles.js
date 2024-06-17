import { css } from "@emotion/react";

export const mainSliderContainer = (currentSlide) => css`
  width: 500vw;
  height: 350px;
  border-bottom: 1px solid var(--outLine);
  display: flex;
  position: relative;
  background-color: ${currentSlide % 2 === 0 ? 'white' : '#3F3D55'};
  transform: translateX(-${currentSlide * 100}vw);
  transition: ${currentSlide===0 ? 'none' : 'all 1s ease'};

  @media (max-width: 765px) {
    height: 250px;
  }
`;

export const imageContainer = css`
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding : 50px;
  box-sizing: border-box;
`;

export const imageBox = css`
  width: 450px;
  height: 300px;
  background-size: cover;

  @media (max-width: 765px) {
    width: 300px;
  height: 200px;
  }
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

  @media (max-width: 765px) {
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 16px;
    }
    
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