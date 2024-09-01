import {CDN_URL} from "../utils/constant.js";
export const RestaurantCard = (props) => {
     const {resData} = props;
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData?.info;
     return (
          <div className="res-card">
        <img className="card-img" alt="CardLogo" src={CDN_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <h3>{cuisines.join(', ')}</h3>
        <h3>{costForTwo}</h3>
        <h3>{avgRating}</h3>
</div>
     )
};