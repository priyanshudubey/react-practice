import { RESTRO_URL, IMAGE_CDN_URL } from "../../utils/constants";
import { MdStarRate } from "react-icons/md";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  areaName,
  cuisines,
  deliveryTime,
  costForTwo,
  address,
  avgRating,
  totalRatingsString,
}) => {
  return (
    <div className="h-[fit-content] px-[10px] py-[30px] overflow-hidden text-[15px] shadow-lg m-4">
      <img
        className="w-[250px] h-[150px] rounded-lg"
        alt="res logo"
        src={IMAGE_CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-[18px] font-bold mt-[5px]">
        {name.length > 23 ? name.slice(0, 20) + "..." : name.slice(0, 24)}
      </h3>
      <p className="text-[#828080] font-[500px] font-[Gilroy, sans-serif] text-[15px]">
        {cuisines.join(", ").length > 32
          ? cuisines.join(", ").slice(0, 28) + "..."
          : cuisines.join(", ").slice(0, 32)}
      </p>
      <p className="text-[#828080] font-[500px] font-[Gilroy, sans-serif] text-[15px]">
        {areaName}
      </p>
      <div className="font-semibold flex items-center justify-between mr-[10px] text-[#545454]">
        <h4 className="flex items-center">
          <MdStarRate
            className="text-white w-[18px] h-[18px] rounded-[50%] p-[2px] mr-[3px]"
            style={
              avgRating > 4.0
                ? { backgroundColor: "green" }
                : { backgroundColor: "red" }
            }
          />
          <span>{avgRating}</span>
        </h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

//heiger order component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-orange-700 text-white m-2 p-2 rounded-lg">
          {props.discountHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
