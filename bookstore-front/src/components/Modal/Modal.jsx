import { css } from "@emotion/react";
import Button from "../Button/Button";

const ModalContainer = css`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalBox = css`
  width: 355px;
  height: 355px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  padding: 35px 20px 45px 20px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const inputID = css`
    width: 215px;
    height: 30px;
    margin-top: 10px;
    font-size: 14px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
`

const loginCheck = css`
margin-top: 20px;
    font-size: 13px;
    margin-bottom: 30px;
`
const register = css`
    font-size: 13px;
    color: #8F8D8D;
    margin-top: 10px;
`

function Modal() {
  return (
    <>
      <div css={ModalContainer}>
        <form css={ModalBox}>
            <h1>로그인</h1>
            <input css={inputID} placeholder="ID"></input>
            <input css={inputID} placeholder="PASSWORD"></input>
            <div css={loginCheck}>아이디 또는 패스워드가 일치하지 않습니다</div>
            <Button title="시작하기"/>
            <div css={register}>회원 가입</div>
          </form>
      </div>
    </>
  );
}

export default Modal;
