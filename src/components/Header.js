import { LOGO_URL } from "../utils/constant";
export const Header = () => {
     return (
<div className="headers">
     <div className="logo">
          <img className="img-logo" src={LOGO_URL}/>
     </div>
     <div className="nav-items">
          <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
          </ul>
     </div>
</div>
)
};