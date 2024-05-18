import { inputID, loginCheck, register } from "./Modal.styles";
import Button from "../Button/Button";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../reduces/modalSlice";
import useInput from "../../hooks/useInput";
import { userLogin, userLogout } from "../../reduces/userSlice";

function ModalLogin() {
  const dispatch = useDispatch();
  const [userEmail, onChangeUserEmail] = useInput("");
  const [userPassword, onChangeUserPassword] = useInput("");
  const loginMessage = useSelector((state)=>state.user.loginMessage)

  const handleRegister = useCallback(() => {
    dispatch(
      openModal({
        modalType: "register",
      })
    );
  });

  const handleLogin = () => {
    dispatch(userLogin({ userEmail, userPassword }));
  };

  return (
    <>
      <h1>로그인</h1>
      <input
        css={inputID}
        autoFocus
        placeholder="Email"
        onChange={onChangeUserEmail}
      />
      <input
        css={inputID}
        type="password"
        placeholder="Password"
        autoComplete="new-password"
        onChange={onChangeUserPassword}
      ></input>
      <div css={loginCheck}>{loginMessage}</div>
      <Button
        title="시작하기"
        width="150px"
        active="true"
        onClick={handleLogin}
      />
      <div css={register} onClick={handleRegister}>
        회원 가입
      </div>
    </>
  );
}

export default ModalLogin;
