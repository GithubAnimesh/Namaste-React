import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import userOnlineSatus from "../utils/useUserStatus";

export const Header = () => {
  const [loginBTNReact, setLoginBTNReact] = useState("Login");
  const onLineStatus = userOnlineSatus();
  return (
    <div className="flex justify-between bg-pink-100">
      <div className="logo">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">Online Status: {onLineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
