import { useNavigate } from "react-router";
import { SignUpStyle } from "./styled";
import { useState } from "react";
import { cmsAxiosPost } from "../../../utils/axiosHelper";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(1);
  const nav = useNavigate();
  const submitSignUp = async (e: any) => {
    e.preventDefault();
    try {
      const res = await cmsAxiosPost(`/add-user`, {
        email: email,
        password: password,
        role: role,
      });

      if (res) {
        alert("User Registered Successfully");
        nav("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SignUpStyle>
      <form onSubmit={submitSignUp}>
        <div className="main-ctn">
          <div className="heading">Change Management System</div>
          <div className="heading">Sign Up</div>
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
                placeholder="Create A Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>

            <div className="input-ctn">
              <label>Role</label>
              <select
                className="role-input"
                onChange={(e) => setRole(parseInt(e.target.value))}
                defaultValue={1}
                required
              >
                <option value={1}>Level1</option>
                <option value={2}>Level2</option>
                <option value={3}>Level3</option>
              </select>
            </div>

            <div className="signup-ctn">
              <button type="submit" className="signup-btn">
                SignUp
              </button>
            </div>
            <div className="signup-ctn">
              <a href="/login">Login?</a>
            </div>
          </div>
        </div>
      </form>
    </SignUpStyle>
  );
};

export default SignUp;
