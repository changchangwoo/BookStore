import {
  inputID,
  registerCheck,
  register,
  passwordCheck,
} from "./Modal.styles";
import Button from "../Button/Button";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import API from "../../utils/api";
import useInput from "../../hooks/useInput";

function ModalRegister() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerEmailCheck, setRegisterEmailCheck] = useState(false);
  const [password, onChangePassword] = useInput("");
  const [passwordEqual, onChangePasswordEqual] = useInput("");

  const idCheckDebounced = useCallback(
    debounce((value) => {
      API.post("/users/check", {
        email: value,
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) setRegisterEmailCheck(true);
          else setRegisterEmailCheck(false);
        })
        .catch((err) => {
          setRegisterEmailCheck(false);
        });
    }, 500),
    []
  );

  const handleEmail = (e) => {
    idCheckDebounced(e.target.value);
  };

  return (
    <>
      <h1>회원가입</h1>
      <input css={inputID} placeholder="EMAIL" onChange={handleEmail}></input>
      {registerEmailCheck ? (
        <div css={registerCheck}>사용 가능한 이메일입니다</div>
      ) : (
        <div css={registerCheck("red")}>이미 사용중인 이메일입니다</div>
      )}

      <input
        type="password"
        css={inputID}
        onChange={onChangePassword}
        placeholder="PASSWORD"
      ></input>
      <input
        type="password"
        css={inputID}
        onChange={onChangePasswordEqual}
        placeholder="PASSWORD CHECK"
      ></input>
      {(password === passwordEqual) && (password !== "") ? (
        <div css={passwordCheck}>사용 가능한 비밀번호입니다</div>
      ) : (
        <div css={passwordCheck("red")}>비밀번호 확인이 일치하지 않습니다</div>
      )}
      <Button title="시작하기" width="150px" active={true}/>
    </>
  );
}

export default ModalRegister;
