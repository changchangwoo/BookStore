import { inputID, registerCheck, register, passwordCheck } from "./Modal.styles";
import Button from "../Button/Button";

function ModalRegister() {
  return (
    <>
      <h1>회원가입</h1>
      <input css={inputID} placeholder="ID"></input>
      <div css={registerCheck}>사용 가능한 아이디입니다</div>

      <input css={inputID} placeholder="PASSWORD"></input>
      <input css={inputID} placeholder="PASSWORD CHECK"></input>

      <div css={passwordCheck}>비밀번호 확인이 일치하지 않습니다</div>
      <Button title="시작하기" width="150px" />
    </>
  );
}

export default ModalRegister;
