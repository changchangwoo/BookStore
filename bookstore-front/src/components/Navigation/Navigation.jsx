import { useDispatch } from "react-redux";
import {navContainer,navButton,darkModeButton,menuButton,leftContainer,rightContainer
} from "./Navigation.styles"
import { useCallback } from "react";
import { openModal } from "../../reduce/modalSlice";
function Navigation() {
  const dispatch = useDispatch();
  const handleOpenLogin = useCallback(() => {
    dispatch(
      openModal({
        modalType: "login",
      })
    )
  })
  return (

    <>
      <div css={navContainer}>
        <div css={leftContainer}>
          <div css={navButton}>로고</div>
          <div css={menuButton}>
            <span class="material-symbols-outlined">menu</span>
          </div>
        </div>
        <div css={rightContainer}>
          <div css={navButton} onClick={handleOpenLogin}>로그인</div>
          <div css={darkModeButton}>
            <span className="material-symbols-outlined">light_mode</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
