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
import { checkLogin, setLoginMessage, userLogout } from "../../reduces/userSlice";
import { openMessage } from "../../reduces/messageSlice";

function Navigation() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const loginCheck = useSelector((state) => state.user.loginCheck);

  useEffect(()=>{
    dispatch(checkLogin())
  }, [])

  const handleOpenLogin = useCallback(() => {
    dispatch(
      setLoginMessage()
    )
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
    if(!loginCheck) dispatch(openMessage("로그인이 만료되었습니다. 다시 로그인해주세요!"))
    navigator("/cart");
  });

  const handleGoOrder = useCallback(() => {
    if(!loginCheck) dispatch(openMessage("로그인이 만료되었습니다. 다시 로그인해주세요!"))
    navigator("/order");
  });

  const handleLogOut = useCallback(()=>{
    dispatch(userLogout())
    dispatch(openMessage({message : "성공적으로 로그아웃 되었습니다"}))
    navigator("/");
  })
  
  return (
    <>
        <div css={navContainer}>
          <div css={leftContainer}>
            <div css={navButton} onClick={handleGoHome}>
              로고
            </div>
            <div css={menuButton}>
              <span className="material-symbols-outlined">menu</span>
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
