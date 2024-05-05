import { css } from "@emotion/react"

const sectionContainer = (backgroundColor) => css`
    width: 1000px;
    height: 100%;
    background-color: ${backgroundColor};
    margin: auto;
    overflow: hidden;
`

const sectionTitle = css`
  font-size: 24px;
  font-weight: bold;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 20px;
`;

function CartSection (props) {
    return(
        <>
        <div css={sectionContainer(props.backgroundColor)}>
            <div css={sectionTitle}>{props.title}</div>
            {props.children}
        </div>
        </>
    )
}

export default CartSection