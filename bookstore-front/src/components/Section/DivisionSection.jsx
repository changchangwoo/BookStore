import { css } from "@emotion/react";

const sectionContainer = (backgroundColor) => css`
  width: 100%;
  height: 567px;
  background-color: ${backgroundColor};
  margin: auto;
  overflow: hidden;
  border-bottom: 1px solid #e1e1e1;
`;

const contentContainer = css`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
`;

const leftContainer = css`
  width: 50%;
  height: 100%;
  padding-left: 105px;

`;

const rightContainer = css`
  width: 50%;
  height: 100%;
  padding-right: 105px;

`;
const sectionTitle = css`
  font-size: 24px;
  font-weight: bold;
  margin: auto;

  margin-top: 50px;
  margin-bottom: 20px;
`;

const cardList = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
function DivisionSection(props) {
  return (
    <>
      <div css={sectionContainer(props.backgroundColor)}>
        <div css={contentContainer}>
          <div css={leftContainer}>
            <div css={sectionTitle}>{props.titleLeft}</div>
            <div css={cardList}>{props.children[0]}</div>
          </div>
          <div css={rightContainer}>
            <div css={sectionTitle}>{props.titleRight}</div>
            <div css={cardList}>{props.children[1]}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DivisionSection;
