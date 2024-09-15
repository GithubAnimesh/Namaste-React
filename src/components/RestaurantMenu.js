import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { FetchResInfo } from "../utils/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  console.log(resId);
  const fetchMenu = async () => {
    const data = await fetch(FetchResInfo + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRatingString, city } =
    resInfo?.cards[2]?.card?.card?.info;
  const items =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(" ")}</h2>
      <ul>
        {items.map((info) => (
          <li key={info.card.info.id}>
            {info.card.info.name} - Rs.{info.card.info.price / 100}
          </li>
        ))}
        <li>{avgRatingString}</li>
        <li>{city}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
