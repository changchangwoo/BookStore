import {
  inputID,
  registerCheck,
  register,
  passwordCheck,
} from "./Modal.styles";
import Button from "../Button/Button";
import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import API from "../../utils/api";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { openModal } from "../../reduces/modalSlice";

function ModalRegister() {
  const dispatch = useDispatch();

  const [email ,setEmail] = useState('');
  const [password, onChangePassword] = useInput("");
  const [passwordEqual, onChangePasswordEqual] = useInput("");
  // 비밀번호 입력 폼
  const [registerEmailCheck, setRegisterEmailCheck] = useState(false);
  const [registerPwCheck, setRegisterPwCheck] = useState(false);
  // 비밀번호-아이디 적합한지 확인(유효성)
  const [buttonActive, setButtonActive] = useState(false)
  // 버튼 활성화
  const [emailMessage, setEmailMessage] = useState("이메일 형식으로 입력해주세요")
  const [pwMessage, setPwMessage] = useState("비밀번호는 8자 이상이어야합니다")
  // 오류 메세지 출력

  const emailValidation = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
    
  }

  const pwValidation = () => {
    const pwRegex = /^(?=.*[a-zA-Z]).{8,}$/;
    return pwRegex.test(password);

  }

  const idCheckDebounced = useCallback(
    debounce((value) => {
      if(!emailValidation(value)) {
        setEmailMessage("이메일 형식을 지켜주세요 (email@email.com) ")
        setRegisterEmailCheck(false);
      }
      else {
      API.post("/users/check", {
        email: value,
      })
        .then((response) => {
          if (response.status === 200) {
            setEmailMessage("사용 가능한 이메일입니다")
            setEmail(value)
            setRegisterEmailCheck(true);
          }
        })
        .catch((err) => {
          setEmailMessage("이미 사용중인 이메일입니다")
          setRegisterEmailCheck(false);
        });
      }
    }, 200)
  );

  useEffect(()=>{
    if(!pwValidation(password)) {
      setRegisterPwCheck(false)
      setPwMessage("비밀번호는 최소 8글자 이상, 문자가 포함되어야합니다")
      return
    } else {
      if(password !== passwordEqual) {
        setRegisterPwCheck(false)
        setPwMessage("비밀번호 확인이 일치하지 않습니다")
      } else {
      setRegisterPwCheck(true)
      setPwMessage("사용 가능한 비밀번호입니다")
      }
    }
  }, [password, passwordEqual])

  useEffect(()=>{
    if(registerEmailCheck && registerPwCheck) setButtonActive(true)
      else setButtonActive(false)
  }, [registerEmailCheck, registerPwCheck])

  const handleJoin = () => {
    API.post("/users/join", {
      email : email,
      password : password
    }).then((response)=>{
      if(response.status === 201) {
        dispatch(
          openModal({
            modalType: "login"
          })
        )
      }
    }).catch((err)=> {
      console.log(err)
    })
  }

  return (
    <>  
      <h1>회원가입</h1>
      <input css={inputID} placeholder="Email" onChange={(e)=>idCheckDebounced(e.target.value)}></input>
      {registerEmailCheck ? (
        <div css={registerCheck}>{emailMessage}</div>
      ) : (
        <div css={registerCheck("red")}>{emailMessage}</div>
      )}

      <input
        type="password"
        css={inputID}
        onChange={onChangePassword}
        placeholder="Password"
      ></input>
      <input
        type="password"
        css={inputID}
        autoComplete="new-password"
        onChange={onChangePasswordEqual}
        placeholder="Password Check"
      ></input>
      {registerPwCheck ? (
        <div css={passwordCheck}>{pwMessage}</div>
      ) : (
        <div css={passwordCheck("red")}>{pwMessage}</div>
      )}
      <Button title="시작하기" width="150px" active={buttonActive} onClick={handleJoin}/>
    </>
  );
}

export default ModalRegister;
