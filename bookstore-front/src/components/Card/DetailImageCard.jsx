import { css } from "@emotion/react";

const sectionContainer = css`
  width: 324px;
  height: 526px;
  background-color: var(--subBG);
  border: 1px solid var(--outLine);
  color : var(--fontColor);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 500px;
    height: 400px;
    margin-bottom: 40px;
  }
`;

const imgContainer = css`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid var(--outline);
  object-fit: fit;

  @media (max-width: 768px) {
    object-fit: scale-down;
  }
`;

function DetailImageCard(
  {
    img,
    id
  }
) {
  return (
    <>
      <div css={sectionContainer}>
        <img src={img}
        css={imgContainer}/>
      </div>
    </>
  );
}

export default DetailImageCard;
