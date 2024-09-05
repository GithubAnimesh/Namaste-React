import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
export const Header = () => {
  const [loginBTNReact, setLoginBTNReact] = useState("Login");
  return (
    <div className="headers">
      <div className="logo">
        <img className="img-logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="loginBTN"
            onClick={() => {
              loginBTNReact === "Login"
                ? setLoginBTNReact("Logout")
                : setLoginBTNReact("Login");
            }}
          >
            {loginBTNReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
