import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
     return (
<div className="headers">
     <div className="logo">
          <img className="img-logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
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
const resList = [
     {
         resName: "KFC Foods",
         resCuisine: "Nonveg",
         resRating: "4 stars",
         resTime: "30 minutes"
     },
     {
         resName: "Dominos",
         resCuisine: "Pizza",
         resRating: "4.4 stars",
         resTime: "38 minutes"
     },
     {
         resName: "MOMO",
         resCuisine: "MOMO's",
         resRating: "4.4 stars",
         resTime: "38 minutes"
     }
 ];
const RestaurantCard = (props) => {
     const {resData} =  props;
     return (
          <div className="res-card">
          <img alt="Card img" className="card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/1KGOCMB" />
          <h3>{resData.resName}</h3>
          <h4>{resData.resCuisine}</h4>
          <h4>{resData.resRating}</h4>
          <h4>{resData.resTime}</h4>
          </div>
     )
};
const Body = () => {
     return(
          <div className="body">
               <div className="search">Search</div>
               <div className="res-container">
               {
                    resList.map((restaurant) => (
                         <RestaurantCard key={restaurant.resId} resData={restaurant}/>
                    ))
               }
               </div>
          </div>
     )
};
const AppBody = () => {
return (
     <div className="app">
       <Header />
       <Body />
     </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppBody/>);