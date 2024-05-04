import { css } from "@emotion/react"

const buttonContainer = (width, marginRight) => css`
    width: ${width};
    height: 50px;
    box-sizing: border-box;
    padding: 15px;
    text-align: center;
    font-size: 16px;
    color: white;
    background-color: #79D7F3;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s;
    margin-right: ${marginRight};
    &:hover {
        background-color: #0882F3;
    }
`

function Button (props) {
    return(
        <>
        <div css={buttonContainer(props.width, props.marginRight)}>
            {props.title}
        </div>
        </>
    )

}

export default Button