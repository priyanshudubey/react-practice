import { RESTRO_URL } from "../../utils/constants";

const RestaurantCard = ({
  name,
  area,
  cuisines,
  lastMileTravelString,
  costForTwoString,
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
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
        <h4>
          <i
            className="fa fa-star"
            aria-hidden="true"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
        <h4>{address}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
