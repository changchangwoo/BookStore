import { css } from "@emotion/react";

const cartPageContainer = css`
  width: 100%;
  height: 100%;
  background-color: var(--mainBG);
  color: var(--fontColor);
  transition: all 0.2s;

`;

const sectionContainer = (backgroundColor) => css`
  width: 1000px;
  height: 100%;
  background-color: var(--mainBG);
  margin: auto;
  overflow: hidden;
  transition: all 0.2s;
`;

const sectionTitle = css`
  font-size: 24px;
  font-weight: bold;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 20px;
`;



function CartSection(props) {
  return (
    <>
      <div css={cartPageContainer}>
        <div css={sectionContainer(props.backgroundColor)}>
          <div css={sectionTitle}>{props.title}</div>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default CartSection;
