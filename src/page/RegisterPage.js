import React, { useState } from "react";
// import { Container, Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userActions } from "../action/userAction";
// import "../style/register.style.css";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    policy: false,
  });
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [policyError, setPolicyError] = useState(false);
  const error = useSelector((state) => state.user && state.user.error);
  const register = (event) => {
    event.preventDefault();
    const {name,email,password,confirmPassword,policy}= formData;
    if(password!==confirmPassword){
      setPasswordError("비밀번호가 일치하지 않습니다.")
      return ;
    }else{
      setPasswordError('')
    }
    if(!policy){
      setPolicyError(true);
      alert('이용약관에 동의를 해주세요.')
      return ;
    }
      setPolicyError(false);
      dispatch(userActions.registerUser({name,email,password},navigate));
    // 비번 중복확인 일치하는지 확인
    // 이용약관에 체크했는지 확인
    // FormData에 있는 값을 가지고 백엔드로 넘겨주기
    //성공후 로그인 페이지로 넘어가기
  };

  const handleChange = (event) => {
    event.preventDefault();
    const {id,value,checked}=event.target;
    if(id==="policy"){
      setFormData({...formData,[id]:checked});
    }else{
      setFormData({...formData,[id]:value});
    }
    // 값을 읽어서 FormData에 넣어주기
  };

  return (
    <div className="register-area">
      {error && (
        <div>
          <div variant="danger" className="error-message">
            {error}
          </div>
        </div>
      )}
      <form onSubmit={register}>
        <div className="mb-3">
          <div>Email</div>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <div>Name</div>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <div>Password</div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <div>Confirm Password</div>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
            isInvalid={passwordError}
          />
          {passwordError.length > 0 ? 
            <div type="invalid">
            {passwordError}
            </div> : <div></div>}
        </div>
        <div className="mb-3">
          <input
            type="checkbox"
            label="이용약관에 동의합니다"
            id="policy"
            onChange={handleChange}
            isInvalid={policyError}
          />
        </div>
        <button variant="danger" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
