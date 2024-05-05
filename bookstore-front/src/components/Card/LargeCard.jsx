import { css } from "@emotion/react";

const sectionContainer = css`
  width: 480px;
  height: 438px;
  background-color: white;
  border: 1px solid #e1e1e1;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const imgBox = css`
  width: 230px;
  height: 90%;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
`;

const descriptionBox = css`
  width: 190px;
  height: 90%;
  h1 {
    font-size: 20px;
    margin: 0;
    font-weight: bold;
  }
  h2 {
    font-size: 16px;
    margin: 0;
    margin-top: 10px;
    font-weight: 500;
    color: #8F8D8D;
  }
`;

const simpleDescript = css`
    margin-top: 50px;
    width: 190px;
    height: 200px;
    font-size: 14px;
    font-weight: 300;
`

const price = css`
    margin-top: 30px;
    font-size: 14px;
`

function LargeCard() {
  return (
    <>
      <div css={sectionContainer}>
        <div css={imgBox}></div>
        <div css={descriptionBox}>
        <h1>상실의 시대</h1>
        <h2>무라카미 하루키</h2>
        <div css={simpleDescript}>
        이 책은 너무 재밌어서 두번 읽어도 또 읽고싶을 확률이 큽니다 조심하세요.
참고로 저는 이거 군대에서 처음읽었는데 한번 읽고 또 읽고싶어서 전자책으로 샀습니다.. 그리고 종이책으로도 삼.. 후덜덜덜 내 돈!

        </div>
        <div css={price}>
            28,000원
        </div>
        </div>
      </div>
    </>
  );
}

export default LargeCard;
