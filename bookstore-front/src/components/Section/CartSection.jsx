import { css } from "@emotion/react";

const cartPageContainer = css`
  width: 100%;
  height: auto;
  background-color: var(--mainBG);
  color: var(--fontColor);
  transition: all 0.2s;
`;

const sectionContainer = css`
  width: 1000px;
  height: 100%;
  display: flex;
  background-color: var(--mainBG);
  margin: auto;
  overflow: hidden;

  @media (max-width: 765px) {
    width: 500px;
    justify-content: center;
    align-items: center;
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
  @media (max-width: 765px) {
    width: 500px;
  }
`;

function CartSection(props) {
  return (
    <>
      <div css={cartPageContainer}>
        <div css={sectionTitle}>{props.title}</div>
        <div css={sectionContainer}>{props.children}</div>
      </div>
    </>
  );
}

export default CartSection;
