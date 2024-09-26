import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import userOnlineSatus from "../utils/useUserStatus";
import { FetchCardList } from "../utils/constant";
import RestaurantMenuLists from "../utils/useRestaurantMenuLists";

export const Body = () => {
  const resCardList = RestaurantMenuLists();
  const [filterList, setfilterList] = useState([]);
  const [serchText, setSearchText] = useState("");

  const fetData = async () => {
    let data = await fetch(FetchCardList);
    let json = await data.json();
    setfilterList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  useEffect(() => {
    fetData();
  }, []);
  const userOnline = userOnlineSatus();
  if (userOnline === false)
    return <h1>You are ofline. Please check your internet connection.</h1>;
  return resCardList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={serchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let filtered = resCardList.filter((res) =>
                res.info.name.toLowerCase().includes(serchText.toLowerCase())
              );
              setfilterList(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filetr-btn"
          onClick={() => {
            let filtered = resCardList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilterList(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
