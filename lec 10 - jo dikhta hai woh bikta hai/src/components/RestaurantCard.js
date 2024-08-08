import { RESTRO_URL, IMAGE_CDN_URL } from "../../utils/constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  areaName,
  cuisines,
  deliveryTime,
  costForTwo,
  address,
  avgRating,
}) => {
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
      <img
        className="w-[250px] h-[150px] rounded-lg"
        alt="res logo"
        src={IMAGE_CDN_URL + cloudinaryImageId}
      />
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      <em>{cuisines.join(", ")}</em> <br />
      {/* <p
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}></p> */}
      <small>{areaName}</small>
      {/* <h4>{areaName}</h4> */}
      <p
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}>
        <small style={avgRating > 3 ? { color: "green" } : { color: "orange" }}>
          {avgRating}
        </small>
        <small>{costForTwo}</small> <small>{deliveryTime}</small>
      </p>
    </div>
  );
};

export default RestaurantCard;
