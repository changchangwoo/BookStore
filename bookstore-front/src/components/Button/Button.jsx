import { css } from "@emotion/react"

const buttonContainer = (width, marginRight, color) => css`
    width: ${width};
    height: 50px;
    box-sizing: border-box;
    padding: 15px;
    text-align: center;
    font-size: 16px;
    color: white;
    background-color: ${color === "red" ? "#EF6BAA" : "#79D7F3"};
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s;
    margin-right: ${marginRight};
    &:hover {
        background-color: ${color === "red" ? "#EA0573" : "#0882F3"};
    }
`

function Button (props, active) {
    return(
        <>
        <div css={buttonContainer(props.width, props.marginRight, props.color)}>
            {props.title}
        </div>
        </>
    )

}

export default Button