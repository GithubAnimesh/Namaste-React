import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";
import  cardList  from "../utils/mockData";
export const Body = () => {
     const [resCardList, setcardList] = useState(cardList);
     return(
          <div className="body">
               <div className="filter"><button className="filetr-btn" onClick={() => { let filtered =  resCardList.filter((res) => res.info.avgRating > 4.5 );
                setcardList(filtered);
               }}>Top Rated Restaurant</button></div>
               <div className="res-container">
               {
                    resCardList.map((restaurant) => (
                         <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
               }
               </div>
          </div>
     )
};

