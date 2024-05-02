import { css } from "@emotion/react";
import sliderImage1 from "../../assets/imgs/mainSlider_1.png";

const mainSliderContainer = css`
  width: 100%;
  height: 350px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  background-color: white;
`;

const leftContainer = css`
  display: flex;
  justify-content: right;
  align-items: center;
  flex: 0.1;
`;

const imageContainer = css`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rightContainer = css`
  display: flex;
  justify-content: left;
  align-items: center;
  flex: 0.1;
`;

const imageBox = css`
  width: 535px;
  height: 344px;
`;

const sliderDescript1 = css`
  flex: 0.6;
  display: flex;
  justify-content: center;
  flex-direction: column;
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

const iconStyle = {
  fontSize: 50,
  height: 50,
};

function MainSlider() {
  return (
    <>
      <div css={mainSliderContainer}>
        <div css={leftContainer}>
          <span
            class="material-symbols-outlined"
            style={{ ...iconStyle }}
          >
            chevron_left
          </span>
        </div>
        <div css={imageContainer}>
          <img src={sliderImage1} css={imageBox} />
          <div css={sliderDescript1}>
            <h2>잠이 안 오는 늦은 새벽에는</h2>
            <h1>감성 에세이 한 편 어떠세요?</h1>
          </div>
        </div>

        <div css={rightContainer}>
          <span
            class="material-symbols-outlined"
            style={{ ...iconStyle }}
          >
            chevron_right
          </span>
        </div>
      </div>
    </>
  );
}

export default MainSlider;
