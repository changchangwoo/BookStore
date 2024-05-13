import { useDispatch, useSelector } from "react-redux";
import {
  navContainer,
  navButton,
  darkModeButton,
  menuButton,
  leftContainer,
  rightContainer,
} from "./Navigation.styles";
import { useCallback, useEffect, useState } from "react";
import { openModal } from "../../reduces/modalSlice";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../reduces/userSlice";
function Navigation() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const loginCheck = useSelector((state) => state.user.loginCheck);
  const handleOpenLogin = useCallback(() => {
    dispatch(
      openModal({
        modalType: "login",
      })
    );
  });

  const handleGoHome = useCallback(() => {
    navigator("/");
  });
  const handleGoCart = useCallback(() => {
    navigator("/cart");
  });
  const handleGoOrder = useCallback(() => {
    navigator("/order");
  });
  const handleLogOut = useCallback(()=>{
    dispatch(userLogout())
  })
  return (
    <>
        <div css={navContainer}>
          <div css={leftContainer}>
            <div css={navButton} onClick={handleGoHome}>
              로고
            </div>
            <div css={menuButton}>
              <span class="material-symbols-outlined">menu</span>
            </div>
          </div>
          <div css={rightContainer}>
            {
              loginCheck ?
              <> 
              <div css={navButton("10px")} onClick={handleGoCart}>
              장바구니
            </div>
              <div css={navButton("10px", "100px")} onClick={handleGoOrder}>
              마이페이지
            </div>
              <div css={navButton("10px")} onClick={handleLogOut}>
              로그아웃
            </div>
            </>
              :
            <div css={navButton} onClick={handleOpenLogin}>
              로그인
            </div>
            }
            <div css={darkModeButton}>
              <span className="material-symbols-outlined">light_mode</span>
            </div>
          </div>

        </div>
    </>
  );
}

export default Navigation;
