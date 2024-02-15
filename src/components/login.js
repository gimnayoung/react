import React, { useState } from "react";
// import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../action/userAction"
import { useEffect } from "react";
import { GoogleLogin } from '@react-oauth/google';

// import "../style/login.style.css";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user || {});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.user?.error);
  const loginWithEmail = (event) => {
    event.preventDefault();
    dispatch(userActions.loginWithEmail({email,password},navigate));
    //이메일,패스워드를 가지고 백엔드로 보내기
  };

  const handleGoogleLogin = async (googleData) => {
    // 구글로 로그인 하기
    console.log("구글",googleData);
    dispatch(userActions.loginWithGoogle(googleData.credential))
  };
  useEffect(() => {
    if (user) {
      navigate("/");
      console.log('로그인에 성공하여 실행',user)
    }
  }, [user, navigate]);
  return (
    <>
      <div className="login-area">
        {error && (
          <div className="error-message">
            <div variant="danger">{error}</div>
          </div>
        )}
        <form className="login-form" onSubmit={loginWithEmail}>
          <div className="mb-3" controlId="formBasicEmail">
            <div>Email address</div>
            <input
              type="email"
              placeholder="Enter email"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="mb-3" controlId="formBasicPassword">
            <div>Password</div>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="display-space-between login-button-area">
            <button variant="danger" type="submit">
              Login
            </button>
            <div>
              아직 계정이 없으세요?<Link to="/register">회원가입 하기</Link>{" "}
            </div>
          </div>

          <div className="text-align-center mt-2">
            <p>-외부 계정으로 로그인하기-</p>
            <div className="display-center">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log('Login Failed')
              }}
            />
            </div>
          </div>
          {/* 1.구글 로그인 버튼을 가져오기
              2.Oauth로그인을 위해 구글api사이트에 가입하고 클라이언트 키, 시크릿 키 받아오기
              3.로그인 
              4.백엔드에서 로그인하기
               a.이미 로그인을 한적이 있는 유저= 로그인 시키고 토큰값 주면 땡
               b.처음 로그인 시도를 한 유저면 ? 유저 정보 먼저 새로 생성=> 토큰값 넘기기
               */}
        </form>
      </div>
    </>
  );
};

export default Login;
