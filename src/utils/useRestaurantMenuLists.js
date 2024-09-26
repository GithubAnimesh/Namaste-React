import { useEffect, useState } from "react";
import { FetchCardList } from "../utils/constant";
const RestaurantMenuLists = () => {
  const [resCardList, setResCardList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FetchCardList);
    const json = await data.json();
    setResCardList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return resCardList;
};

export default RestaurantMenuLists;
