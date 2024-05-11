import { inputID, loginCheck, register } from "./Modal.styles";
import Button from "../Button/Button";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../reduces/modalSlice";

function ModalLogin() {
  const dispatch = useDispatch();
  const handleRegister = useCallback(() => {
    dispatch(
      openModal({
        modalType: "register"
      })
    )
  })
  
  return (
    <>
      <h1>로그인</h1>
      <input css={inputID} placeholder="ID"></input>
      <input css={inputID} placeholder="PASSWORD"></input>
      <div css={loginCheck}>아이디 또는 패스워드가 일치하지 않습니다</div>
      <Button title="시작하기" width="150px"/>
      <div css={register}  onClick={handleRegister}>회원 가입</div>
    </>
  );
}

export default ModalLogin;
