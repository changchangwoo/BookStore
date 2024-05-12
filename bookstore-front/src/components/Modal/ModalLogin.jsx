import { inputID, loginCheck, register } from "./Modal.styles";
import Button from "../Button/Button";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../reduces/modalSlice";
import API from "../../utils/api";
import useInput from "../../hooks/useInput";

function ModalLogin() {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [loginIncorrect, setLoginIncorrect] = useState(false);
  const handleRegister = useCallback(() => {
    dispatch(
      openModal({
        modalType: "register",
      })
    );
  });
  const handleLogin = () => {
    API.post("users/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        if(response.status === 200)
        dispatch(
          closeModal()
        )
      })
      .catch((err) => {
        setLoginIncorrect(true)
        console.log(err);
      });
  };

  return (
    <>
      <h1>로그인</h1>
      <input css={inputID} placeholder="Email" onChange={onChangeEmail} />
      <input
        css={inputID}
        type="password"
        placeholder="Password"
        autoComplete="new-password"
        onChange={onChangePassword}
      ></input>
      {loginIncorrect ? (
        <div css={loginCheck}>아이디 또는 패스워드가 일치하지 않습니다</div>
      ) : (
        <div css={loginCheck}></div>
      )}
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
