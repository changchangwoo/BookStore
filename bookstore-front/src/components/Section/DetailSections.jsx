import { css } from "@emotion/react";

const sectionContainer = css`
  width: 100%;
  height: 665px;
  background-color: var(--mainBG);
  margin: auto;
  overflow: hidden;
  border-bottom: 1px solid var(--outLine);
  transition: all 0.2s;
  color: var(--fontColor);
  @media (max-width: 760px) {
   height: auto;
  }
`;

const contentContainer = css`
  max-width: 1200px;
  margin: auto;
  @media (max-width: 760px) {
   flex-direction: column;

  }
`;
const sectionTitle = css`
  width: 1000px;
  font-size: 24px;
  font-weight: bold;
  margin: auto;

  margin-top: 50px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 500px;
    margin-top: 40px;

  }
`;

const cardList = css`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 40px;
    flex-direction: column;
  }
`;
function DetailSection({title, children }) {
  return (
    <>
      <div css={sectionContainer}>
        <div css={contentContainer}>
          <div css={sectionTitle}>{title}</div>
          <div css={cardList}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default DetailSection;
