import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, avgRatingString, city } =
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
