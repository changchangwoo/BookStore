import { css } from "@emotion/react"

const sectionContainer = (backgroundColor) => css`
    width: 100%;
    height: 665px;
    background-color: var(--mainBG);
    margin: auto;
    overflow: hidden;
    border-bottom: 1px solid var(--outLine);
    transition : all 0.2s;
    color : var(--fontColor);
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
function DetailSection ({backgroundColor, title, children}) {
    return(
        <>
        <div css={sectionContainer(backgroundColor)}>
            <div css={contentContainer}>
                <div css={sectionTitle}>{title}</div>
                <div css={cardList}>
                    {children}
                </div>
            </div>
        </div>
        </>
    )
}

export default DetailSection
