import React, { useState } from "react";
import "../ComponentsCss/Login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
impoer {getAuth} from "firebase/auth";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //
  const signIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
  };

  const register = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();

    const auth = getAuth();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth: any) => {
        console.log(auth);
      })
      .catch((error: any) => alert(error.message));
  };

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
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5> 비밀번호 </h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signInButton" onClick={signIn}>
            {" "}
            로그인 하기{" "}
          </button>
        </form>
        <p> 이용 약관 동의하십니까? </p>
        <button className="login_registerButton" onClick={register}>
          {" "}
          회원가입{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
