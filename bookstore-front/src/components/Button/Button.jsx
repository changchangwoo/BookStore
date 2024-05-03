import { css } from "@emotion/react"

const buttonContainer = css`
    width: 150px;
    height: 50px;
    box-sizing: border-box;
    padding: 15px;
    text-align: center;
    margin: auto;
    font-size: 16px;
    color: white;
    background-color: #79D7F3;
    border-radius: 8px;
    font-weight: 600;
`

function Button (props) {
    return(
        <>
        <div css={buttonContainer}>
            {props.title}
        </div>
        </>
    )

}

export default Button