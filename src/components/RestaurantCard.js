import { CDN_URL } from "../utils/constant.js";
export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4">
      <div className=" flex flex-wrap items-center bg-slate-100 max-w-64 h-full py-4 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
        <div className="w-full h-48 overflow-hidden">
          <img
            className="w-full h-full rounded-xl object-cover"
            alt="CardLogo"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <div className="max-h-30 px-4">
          <h3 className="font-sans leading-normal text-lg font-bold">{name}</h3>
          <h3 className="font-sans leading-normal text-gray-400">
            {cuisines.join(", ")}
          </h3>
          <h3 className="font-sans leading-normal">{costForTwo}</h3>
          <h3 className="font-sans leading-normal">⭐{avgRating}</h3>
        </div>
      </div>
    </div>
  );
};
