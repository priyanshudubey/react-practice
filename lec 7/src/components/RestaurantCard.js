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
    <div className="restaurant-card">
      <img
        className="res-img"
        alt="res logo"
        src={RESTRO_URL}
      />
      <h3>{name}</h3>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      {/* <small>{cuisines.join(", ")}</small> <br /> <br /> */}
      <p
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}></p>
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
