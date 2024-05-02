import { css } from "@emotion/react";

function Navigation() {
  const navContainer = css`
    width: 100vw;
    height: 60px;
    border-bottom: 1px solid #e1e1e1;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 40px;
    box-sizing: border-box;
  `;

  const navButton = css`
    width: 80px;
    height: 40px;
    background-color: #79d7f3;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.5s;

    &:hover{
      scale: 1.1;
    }
  `;

  const darkModeButton = css`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #e1e1e1;
    margin-left: 10px;
  `;

  const menuButton = css`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #e1e1e1;
  `;

  const leftContainer = css`
    flex: 0.5;
    display: flex;
    justify-content: left;
  `;

  const rightContainer = css`
    flex: 0.5;
    justify-content: right;
    display: flex;
  `;

  return (
    <>
      <div css={navContainer}>
        <div css={leftContainer}>
          <div css={navButton}>대충 로고</div>
          <div css={menuButton}>
            <span class="material-symbols-outlined">menu</span>
          </div>
        </div>
        <div css={rightContainer}>
          <div css={navButton}>로그인</div>
          <div css={darkModeButton}>
            <span className="material-symbols-outlined">light_mode</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
