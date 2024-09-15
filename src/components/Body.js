import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [resCardList, setcardList] = useState([]);
  const [filterList, setfilterList] = useState([]);
  const [serchText, setSearchText] = useState("");

  const fetData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    setcardList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  useEffect(() => {
    fetData();
  }, []);

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
