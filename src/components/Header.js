import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import userOnlineSatus from "../utils/useUserStatus";

export const Header = () => {
  const [loginBTNReact, setLoginBTNReact] = useState("Login");
  const onLineStatus = userOnlineSatus();
  return (
    <div className="headers">
      <div className="logo">
        <img className="img-logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onLineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
