import { css } from "@emotion/react";

const sectionContainer = css`
  width: 100%;
  height: 587px;
  background-color: var(--mainBG);
  margin: auto;
  overflow: hidden;
  border-bottom: 1px solid var(--outLine);
  transition: all 0.2s;
  color: var(--fontColor);
  display: flex;
  padding-bottom: 40px;
  @media (max-width: 760px) {
   height: auto;
  }
`;

const contentContainer = css`
  max-width: 1000px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
   flex-direction: column;
   max-width: 500px;

  }

`;

const divisioContainer = css`
  width: 50%;
  height: 100%;
  @media (max-width: 760px) {
   width: 100%;
  }
`;

const sectionTitle = css`
width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin: auto;
  margin-bottom: 20px;
  padding-left: 10px;

  
  @media (max-width: 760px) {
   margin-top: 40px;
   width: 100%;
  }
`;

const cardList = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
function DivisionSection(props) {
  return (
    <>
      <div css={sectionContainer}>
        <div css={contentContainer}>
          <div css={divisioContainer}>
            <div css={sectionTitle}>{props.titleLeft}</div>
            <div css={cardList}>{props.children[0]}</div>
          </div>
          <div css={divisioContainer}>
            <div css={sectionTitle}>{props.titleRight}</div>
            <div css={cardList}>{props.children[1]}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DivisionSection;
