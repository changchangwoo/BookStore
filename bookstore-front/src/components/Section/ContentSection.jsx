import { css } from "@emotion/react"

const sectionContainer = (backgroundColor) => css`
    width: 100%;
    height: 567px;
    background-color: ${backgroundColor};
    margin: auto;
    overflow: hidden;
    border-bottom: 1px solid #e1e1e1;
`

const contentContainer = css`
    max-width: 1200px;
    margin: auto;
`
const sectionTitle = css`
width: 990px;
    font-size: 24px;
    font-weight: bold;
    margin: auto;

    margin-top: 50px;
    margin-bottom: 20px;
`

const cardList = css`
    display: flex;
    align-items: center;
    justify-content: center;
`   
function ContentSection (props) {
    return(
        <>
        <div css={sectionContainer(props.backgroundColor)}>
            <div css={contentContainer}>
                <div css={sectionTitle}>{props.title}</div>
                <div css={cardList}>
                    {props.children}
                </div>
            </div>
        </div>
        </>
    )
}

export default ContentSection
