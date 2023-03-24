import React from "react";
import "../ComponentsCss/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <img
        onClick={() => navigate("/")}
        className="login_logo"
        src={process.env.PUBLIC_URL + "./Img/logo2.png"}
        alt=""
      />
      <div className="login_container">
        <h1> 로그인 </h1>
        <form>
          <h5> 이메일 </h5>
          <input type="text" />
          <h5> 비밀번호 </h5>
          <input type="password" />
          <button className="login_signInButton"> 로그인 하기 </button>
        </form>
        <p> 이용 약관 동의하십니까? </p>
        <button className="login_registerButton"> 회원가입 </button>
      </div>
    </div>
  );
}

export default Login;
