import { useDispatch } from "react-redux";
import {navContainer,navButton,darkModeButton,menuButton,leftContainer,rightContainer
} from "./Navigation.styles"
import { useCallback, useEffect, useState } from "react";
import { openModal } from "../../reduces/modalSlice";
import { useNavigate } from "react-router-dom";
function Navigation() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleOpenLogin = useCallback(() => {
    dispatch(
      openModal({
        modalType: "login",
      })
    )
  })

  const handleGoHome = useCallback(()=>{
    navigator('/');
  })
  return (

    <>
      <div css={navContainer}>
        <div css={leftContainer}>
          <div css={navButton} onClick={handleGoHome}>로고</div>
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
