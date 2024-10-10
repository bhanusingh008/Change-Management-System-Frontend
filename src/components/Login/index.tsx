import { useNavigate } from "react-router";
import { LoginStyle } from "./styled";
import { useState } from "react";
import { cmsAxiosPost } from "../../../utils/axiosHelper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const submitLogin = async (e: any) => {
    e.preventDefault();

    try {
      const res = await cmsAxiosPost(`/login-user`, {
        email: email,
        password: password,
      });
      
      localStorage.setItem("jwt_token", `Bearer ${res.token}`);
      const user = {
        email: email,
        id: res.user_id,
        role: res.user_role
      };
      localStorage.setItem("user", JSON.stringify(user));
      nav("/dashboard");
      return;

    } catch (e) {
      console.log(e);
      localStorage.removeItem("jwt_token");
      alert("Either email or password is invalid");
    }

    nav("/login");
  };
  return (
    <LoginStyle>
      <form onSubmit={submitLogin}>
        <div className="main-ctn">
          <div className="heading">Change Management System</div>
          <div className="heading">Login</div>
          <div className="inputs-ctn">
            <div className="input-ctn">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>

            <div className="input-ctn">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>

            <div className="signup-ctn">
              <button type="submit" className="signup-btn">
                Login
              </button>
            </div>
            <div className="signup-ctn">
              <a href="/signup">SignUp?</a>
            </div>
          </div>
        </div>
      </form>
    </LoginStyle>
  );
};

export default Login;
